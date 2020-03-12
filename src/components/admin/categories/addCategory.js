import React, { useState, useContext } from "react";
import styled from "styled-components";
import setApi from "../../../api";
import { useSelector, useDispatch } from "react-redux";
import { Creators as CategoriesCreators } from "../../../ducks/categories";
import { Creators as UploadCreators } from "../../../ducks/upload";
import { Creators as UtilsCreators } from "../../../ducks/utils";
import { getCategories } from "../../../utils/categories";
import { validateImage } from "../../../utils/validate";
import {
  Input,
  TextArea,
  Button
} from "../../../static/styled-components/base";
import Message from "../../utils/Message";
import Upload from "../../utils/Upload";

const reactCtx = React.createContext({});

export default () => {
  const _this = useContext(reactCtx);
  const { message, messageType: result, messageColor: color } = useSelector(
    state => state.Utils
  );
  const { name, description } = useSelector(state => state.Categories);
  const { file } = useSelector(state => state.Upload);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  function createCategory() {
    if (name) {
      if (validateImage(["png"], 100, file)) {
        const formData = new FormData();
        formData.append("icon", file);
        setApi()
          .post(`categories?name=${name}&description=${description}`, formData)
          .then(response => {
            dispatch(
              UtilsCreators.changeMessage("Categoria criada com sucesso")
            );
            dispatch(UtilsCreators.changeMessageType(true));
            dispatch(UtilsCreators.changeMessageColor("green"));
            dispatch(CategoriesCreators.changeName(""));
            dispatch(CategoriesCreators.changeDescription(""));
            setVisible(true);
            dispatch(UploadCreators.cleanUpUpload());
            dispatch(UploadCreators.changeFile(null));
            getCategories(function(err, categories) {
              if (err) {
                dispatch(UtilsCreators.changeMessage(err));
                dispatch(UtilsCreators.changeMessageType(false));
                dispatch(UtilsCreators.changeMessageColor("red"));
                setVisible(true);
                return;
              }
              dispatch(CategoriesCreators.loadCategories(categories));
            });
          })
          .catch(err => {
            dispatch(
              UtilsCreators.changeMessage(
                err.response ? err.response.data : err.toString()
              )
            );
            dispatch(UtilsCreators.changeMessageType(false));
            dispatch(UtilsCreators.changeMessageColor("red"));
            setVisible(true);
          });
      } else {
        dispatch(
          UtilsCreators.changeMessage("Suba imagens PNG com no máximo 100KB")
        );
        dispatch(UtilsCreators.changeMessageType(false));
        dispatch(UtilsCreators.changeMessageColor("red"));
        setVisible(true);
      }
    } else {
      dispatch(UtilsCreators.changeMessage("O nome é necessário"));
      dispatch(UtilsCreators.changeMessageType(false));
      dispatch(UtilsCreators.changeMessageColor("red"));
      setVisible(true);
    }
  }

  return (
    <>
      <h3 className="main-title" style={{ color: "rgb(129, 22, 27)" }}>
        Adicionar nova categoria
      </h3>
      <div>
        <Input
          placeholder="Nome"
          onKeyDown={(e) => {
            if (e.key == 'Enter') createCategory()
          }}
          onChange={e =>
            dispatch(CategoriesCreators.changeName(e.target.value))
          }
          value={name}
        />
        <TextArea
          placeholder="Descrição"
          rows="3"
        
          onChange={e =>
            dispatch(CategoriesCreators.changeDescription(e.target.value))
          }
          value={description}
        />
        {/* <ImageContainer
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Upload
            labelInputFile="Ícone para catgoria"
            onRef={ref => (_this.child = ref)}
          />
        </ImageContainer> */}
      </div>
      {visible ? (
        <Message result={result} color={color} message={message} />
      ) : (
        ""
      )}
      <Button onClick={createCategory}>Criar categoria</Button>
    </>
  );
};
const ImageContainer = styled.div`
  img {
    max-width: 120px;
  }
`;
