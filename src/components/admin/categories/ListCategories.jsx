import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Link, Router } from "../../../../routes";
import { Button } from "../../../static/styled-components/base";
import {
  getCategories,
  deleteCategory,
  editCategory
} from "../../../utils/categories";
import { Creators as UtilsCreators } from "../../../ducks/utils";
import { Creators as CategoriesCreators } from "../../../ducks/categories";
import { Creators as UploadCreators } from "../../../ducks/upload";

import Message from "../../utils/Message";
import TextField from "@material-ui/core/TextField";
import TextArea from "@material-ui/core/TextareaAutosize";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Upload from "../../utils/UploadRedux";

const reactCtx = React.createContext({});

export default function ListCategories() {
  const { categories } = useSelector(state => state.Categories);
  const { message, messageType, messageColor } = useSelector(
    state => state.Utils
  );
  const [visible, setVisible] = useState(false);
  const [diag, setDiag] = useState(false);
  const [categoryToEdit, setcategoryToEdit] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    function asyncFunc() {
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
    }
    asyncFunc();
    return () => {};
  }, []);

  function editCat(cat) {
    console.log(cat.position == 0)
     // return 
    if (cat.position == 0)
      cat.oldPosition = 'false'
    editCategory(cat.id, { ...cat }, function(err, data) {
      if (err) {
        dispatch(UtilsCreators.changeMessage(err));
        dispatch(UtilsCreators.changeMessageType(false));
        dispatch(UtilsCreators.changeMessageColor("red"));
        setVisible(true);
        handleClose();
        return;
      }
      getCategories(function(err, categories) {
        dispatch(CategoriesCreators.loadCategories(categories));
      });
      dispatch(UtilsCreators.changeMessage("Editado com sucesso"));
      dispatch(UtilsCreators.changeMessageType(true));
      dispatch(UtilsCreators.changeMessageColor("green"));
      handleClose();
      setVisible(true);
    });
  }

  function delCat(id) {
    deleteCategory(id, function(err, data) {
      if (err) {
        dispatch(UtilsCreators.changeMessage(err));
        dispatch(UtilsCreators.changeMessageType(false));
        dispatch(UtilsCreators.changeMessageColor("red"));
        setVisible(true);
        return;
      }
      getCategories(function(err, categories) {
        dispatch(CategoriesCreators.loadCategories(categories));
      });
      dispatch(UtilsCreators.changeMessage("Deletado com sucesso"));
      dispatch(UtilsCreators.changeMessageType(true));
      dispatch(UtilsCreators.changeMessageColor("green"));
      setVisible(true);
    });
  }

  function handleClose() {
    setDiag(false);
    setcategoryToEdit({});
  }

  function handleOpen(category) {
   console.log(category) 
    setcategoryToEdit(category);
    setDiag(true);
  }

  return (
    <>
      <h3 className="main-title" style={{ color: "rgb(129, 22, 27)" }}>
        Listar categorias
      </h3>

      <div>
        <Dialog
          open={diag}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Editar categoria</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nome"
              type="text"
              value={categoryToEdit.name}
              onChange={e =>
                setcategoryToEdit({ ...categoryToEdit, name: e.target.value })
              }
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Descrição"
              type="text"
              value={categoryToEdit.description}
              onChange={e =>
                setcategoryToEdit({
                  ...categoryToEdit,
                  description: e.target.value
                })
              }
              fullWidth
            />
            <p>Posição no menu:</p>
            <select 
              onChange={e => 
                setcategoryToEdit({ 
                  ...categoryToEdit, 
                  position: e.target.value, 
                  oldPosition: categoryToEdit.position 
                })
              }
              value={categoryToEdit.position}
              >
              <option value={0}  >Sem posição</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
           </select>

            {/* <Upload
              labelInputFile="Ícone"
              imageURL={category.appIcon}
              onRef={ref => (_this.child = ref)}
            /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={() => editCat(categoryToEdit)} color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <DivListCategories>
        {categories.sort((a,b) => {
           if(a.position && b.position) 
            return a.position-b.position;
           if(!a.position && !b.position) return 0;
             return !b.position ? -1 : 1;
        }).map((category, id) => (
          <CategoryContainer
            flexDirection="row"
            justifyContent="space-between"
            style={{ borderBottom: "2px solid lightgrey", marginTop: "3%", marginBottom: "3%" }}
            key={id}
          >
            <CategoryContainer
              flexDirection="column"
              style={{ display: "flex", justifyContent: "column" }}
            >
              <p style={{ fontWeight: "200" }}>Nome: {category.name}</p>
              <p style={{ fontWeight: "200" }}>Posição no menu: {category.position ? category.position : category.position == 0 ? 'Sem posição' : 'Sem posição' }</p>
              <p style={{ fontWeight: "200" }}>
                Descrição: {category.description}
              </p>
              {/* <p>
                Icone:
                <span style={{ marginLeft: "10px" }}>
                  <img src={category.appIcon} style={{ width: "32px" }} />
                </span>
              </p> */}
            </CategoryContainer>
            <CategoryContainer
              flexDirection="column"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            >
              <Button onClick={() => handleOpen(category)}>Editar Categoria</Button>
              <Button onClick={() => delCat(category.id)}>Apagar Categoria</Button>
              <Link
                route={`/admin/banner/category/${category.id}?name=${category.name}`}
              >
                <Button>Configurar Banner</Button>
              </Link>
            </CategoryContainer>
          </CategoryContainer>
        ))}
      </DivListCategories>

      {visible ? (
        <Message result={messageType} color={messageColor} message={message} />
      ) : (
        ""
      )}
    </>
  );
}

export const Hr = styled.hr`
  width: 50%;
`;

export const Subcontainer = styled.div`
  padding: 0 15px;
`;

export const ImageContainer = styled.div`
  img {
    max-width: 120px;
  }
`;

export const DivListCategories = styled.div`
  max-height: 550px;
  overflow: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(129, 22, 27);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
`;
