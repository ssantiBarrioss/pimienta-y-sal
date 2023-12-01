const productos= [{
    id:1,
    nombre:"Carpaccio fresco",
    descripcion:" Entrada Carpaccio de salmón con cítricos",
    precio:65.50 ,
    imagen:"Carpaccio-de-salmon.jpg",
},
{
    id:2,
    nombre:"Risotto de berenjena",
    descripcion:" Risotto de berenjena y queso de cabra",
    precio:47.00 ,
    imagen:"Risotto-berenjena-queso-cabra.jpg",
},
{
    id:3,
    nombre:"Mousse de arroz",
    descripcion:"Mousse de arroz con leche y aroma de azahar",
    precio:27.50 ,
    imagen:"Mousse-de-arroz-con-leche.jpg",
},
{
    id:4,
    nombre:"Espárragos blancos",
    descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio:37.50 ,
    imagen:"esparragos.png",
},
{
    id:5,
    nombre:"Pastel de papas",
    descripcion:"",
    precio: 15.00,
    imagen:"default-ui-image.webp"
}
]

const indexController= {
    index: (req, res) => {
        res.render("index",{title:"Pimienta & Sal", productos})
    },
    detail: (req, res) => {
        const {id}=req.params;
        const producto= productos.find((producto) => producto.id == id)
        res.render("detail",{title:producto.nombre, producto})
    }

}

module.exports= indexController