import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './ProductForm.css'
import Card from '../Card'

const ProductForm = ({product , productImage , imagePreview , description ,setDescription,handleInputChange ,handleImageChange,saveProduct}) => {
  return (
    <div className=' justify-content-center  w-100 mt-5'>
    <Card>
    <main className="form-signin">
    <form onSubmit={saveProduct}>
    
    <div className="form-floating my-2">
      <input type="text" className="form-control"  placeholder="Product Name" name="name" value={product?.name} onChange={handleInputChange}   required/>
      <label>Product Name</label>
    </div>
    <div className="form-floating my-2">
      <input type="text" className="form-control"  placeholder="Product Category" name="category" value={product?.category} onChange={handleInputChange}   required/>
      <label>Product Category</label>
    </div>
    <div className="form-floating my-2">
      <input type="text" className="form-control"  placeholder="Product Price" name="price" value={product?.price} onChange={handleInputChange}   required/>
      <label>Product Price</label>
    </div>
    <div className="form-floating my-2">
      <input type="text" className="form-control"  placeholder="Product Quantity" name="quantity" value={product?.quantity} onChange={handleInputChange}   required/>
      <label>Product quantity</label>
    </div>
    <div className=" my-2 d-flex flex-column">
      <label>Image</label>  
      <input type="file"   name="image" onChange={(e)=>handleImageChange}   required/>
    </div>
    {imagePreview != null ? (
    <div className="image-preview">
    <img src={imagePreview} alt="product" />
    </div>
    ) : (
    <p>No image set for this poduct.</p>
    )}
    <div className="my-2">
      <label>Product Description</label>
      <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />
    </div>
    <div className='text-center'>
    <button className="w-25 btn btn-sm btn-primary text-center" type="submit">Add Product</button>
    </div>
  </form>
    </main>
    </Card>
    
    </div>
  )
}


ProductForm.modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean"],
    ],
  };
  ProductForm.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "video",
    "image",
    "code-block",
    "align",
  ];
export default ProductForm