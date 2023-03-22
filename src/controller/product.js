import Product from "../models/product";
import Joi from "joi";

// export const create = async () => {
//     console.log("create");
// }

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
});

export const create = async (req,res) => {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            res.json({
                massage: error.details[0].message,
            });
            
        }
        const product = await Product.create(req.body);
        return res.status(201).json({
            massage : "Tao san pham thanh cong!",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            massage : error,
        });
    }
};

export const getAll = async (req,res) => {
    try {
        const products = await Product.find();
        return res.status(201).json({
            massage : "Lay toan bo san pham thanh cong!",
            products,
        })
    } catch (error) {
        return res.status(400).json({
            massage : error,
        });
    }
};

export const get = async (req,res) => {
    try {
        
        const product = await Product.findById(req.params.id);
        return res.status(201).json({
            massage : "Lay san pham thanh cong!",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            massage : error,
        });
    }
};

export const update = async(req,res)  => {
    try {
        const product = await Product.findOneAndUpdate({_id: req.params.id},req.body,{new:true});
        return res.json({
            massage : "Cap nhat san pham thanh cong!",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            massage : error,
        });
    }
};  

export const remove = async(req,res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id});
        return res.json({
            massage : "Xoa san pham thanh cong!",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            massage : error,
        });
    }
};

