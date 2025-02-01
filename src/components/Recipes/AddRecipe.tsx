import { Box, Button, Modal, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { UserContext } from "../Login/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { Recipe } from "./Recipe";
import RecipesStore from "./RecipesStore";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}
const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    ingredients: yup.string().required("Ingrediens are required"),
    products: yup.string().required("Products are required"),
    instructions: yup.string().required("Instruction is required")

});
const AddRecipe = () => {
    const [isOpen, setIsOpen] = useState(true);
    const context = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        const recipe: Recipe = {
            title: data.title,
            description: data.description,
            products: data.products,
            ingredients: data.ingredients.split(",").map((i:string)=>i.trim()),
            instructions: data.instructions,
            id: "",
            authorId: ""
        };        
        if (context && context.user) {
            RecipesStore.addRecipe(recipe, context.user.id);
            reset();
            setIsOpen(false);
        }
    }
    return (<>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <Box sx={style}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Add A New Recipe</h2>
                    <TextField label='title'
                        {...register("title")}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                        fullWidth
                        sx={{ mb: 2 }} />
                    <TextField label='description'
                        multiline
                        {...register("description")}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                        fullWidth
                        sx={{ mb: 2 }} />
                    <TextField label='products'
                        multiline
                        {...register("products")}
                        error={!!errors.products}
                        helperText={errors.products?.message}
                        fullWidth
                        sx={{ mb: 2 }} />
                    <TextField label='ingredients'
                        multiline
                        {...register("ingredients")}
                        error={!!errors.ingredients}
                        helperText={errors.ingredients?.message}
                        fullWidth
                        sx={{ mb: 2 }} />
                    <TextField label='instructions'
                        multiline
                        {...register("instructions")}
                        error={!!errors.instructions}
                        helperText={errors.instructions?.message}
                        fullWidth
                        sx={{ mb: 2 }} />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            background: 'black',
                            color: 'white',
                            borderRadius: '10px',
                            border: '2px solid white'
                        }}
                    >submit</Button>
                </form>
            </Box>
        </Modal>
    </>)
}
export default AddRecipe;
