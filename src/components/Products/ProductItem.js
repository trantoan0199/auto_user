import React from 'react'
import { Card, CardMedia, CardContent, Typography, IconButton, Button } from '@material-ui/core'
import {
    AttachMoneyTwoTone,
    ShoppingCart,
} from "@material-ui/icons"
import { useNavigate } from 'react-router'

export default function ProductItem({ product }) {

    const navigate = useNavigate()

    const handleToggleDetail = (id) => {
        navigate(`/products/${id}`)
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="250"
                image={product.img}
                alt={product.name}
            />
            <CardContent>
                <Typography
                    variant="h4"
                    component="h4"
                    color="red"
                    children={product.name}
                    align="left"
                />
                <Typography variant="body1" color="text.secondary">
                    <IconButton>
                        <AttachMoneyTwoTone />
                    </IconButton>
                    {product.price}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    fullWidth
                    startIcon={<ShoppingCart />}
                    children="CHI TIẾT"
                    onClick={() => handleToggleDetail(product.id)}
                />
            </CardContent>
        </Card>
    )
}
