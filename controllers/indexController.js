const productos= [{
    nombre:"Carpaccio fresco",
    descripcion:" Entrada Carpaccio de salmón con cítricos",
    precio:65.50 ,
},
{
    nombre:"Risotto de berenjena",
    descripcion:" Risotto de berenjena y queso de cabra",
    precio:47.00 ,
},
{
    nombre:"Mousse de arroz",
    descripcion:"Mousse de arroz con leche y aroma de azahar",
    precio:27.50 ,
},
{
    nombre:"Espárragos blancos",
    descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio:37.50 ,
}
]

const indexController= {
    index: (req, res) => {
        res.render("index",{title:"Sal & Pimienta", productos})
    }
}

module.exports= indexController