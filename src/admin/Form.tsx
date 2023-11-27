import { useState } from 'react';

interface newProduct {
    title: string;
    imgUrl: string;
    price: string;
    stock: string,
}

type Props = {
    newProduct: newProduct;
    handleChange: (e: any) => void;
    addProduct: () => void;
}

function ProductForm(props: Props) {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        let isValid = true;
        const newErrors: { [key: string]: string } = {};

        if (!props.newProduct.title.trim()) {
            isValid = false;
            newErrors.title = 'Title is required';
        }

        if (!props.newProduct.imgUrl.trim()) {
            isValid = false;
            newErrors.imgUrl = 'Image Url is required';
        }

        if (!props.newProduct.price.trim()) {
            isValid = false;
            newErrors.price = 'Price is required';
        }

        if (!props.newProduct.stock.trim()) {
            isValid = false;
            newErrors.stock = 'Stock is required';
        }

        setErrors(newErrors);
        return isValid;
    };

    return (
        <form onSubmit={(e : React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (validateForm()) {
                props.addProduct();
            }
        }}>
            <label>Name:
                <input
                    type="text"
                    name="title"
                    onChange={props.handleChange}
                />
            </label>
            {errors.title && <div className="error">{errors.title}</div>}
            <label>Image Url:
                <input
                    type="text"
                    name="imageUrl"
                    onChange={props.handleChange}
                />
            </label>
            {errors.imgUrl && <div className="error">{errors.imgUrl}</div>}
            <label>Price:
                <input
                    type="text"
                    name="price"
                    onChange={props.handleChange}
                />
            </label>
            {errors.price && <div className="error">{errors.price}</div>}
            <label>Stock:
                <input
                    type="text"
                    name="stock"
                    onChange={props.handleChange}
                />
            </label>
            {errors.stock && <div className="error">{errors.stock}</div>}
            <input type="submit" />
        </form>
    )
}

export default ProductForm;