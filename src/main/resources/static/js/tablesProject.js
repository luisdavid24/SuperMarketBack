loadProducts();
loadProvider();


async function loadProducts(){

    try {
        const query = `
            query {
                findAllProducts {
                    id,
                    name,
                    buyingPrice,
                    salePrice,
                    brand,
                    category,
                    provider{
                        name
                    }
                }
            }
        `;
        
        const requestStudent = await  fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query })
        })
        let dataStudent = await requestStudent.json();
        // console.log(dataStudent);
        let listadoHtml = '';
        for (let student of dataStudent.data.findAllProducts) {
            let studentRow='<tr><td>'+student.id+'</td><td>' + 
            student.name + '</td><td>'+student.buyingPrice + '</td><td>' +
            student.salePrice + '</td><td>' +student.brand + '</td></td>'+
            '<td>' +student.category + '</td></td>'+
            '<td>' +student.provider.name + '</td></td>'+
            '</td><td><a class="btn btn-danger btn-circle" onclick=" deleteProductById('+ student.id +')"><i class="fas fa-trash"></i></a></td>';

            listadoHtml+=studentRow;
            
        }

        document.querySelector('#studentTable tbody').outerHTML = listadoHtml;
      
       
    } catch (error) {
        console.error('Error:', error);
    }

}

async function loadProvider(){

    try {
        const query = `
            query {
                findAllProvider {
                    id,
                    name,
                    category,
                    description,
                    direction,
                    bankAccount
                  }
            }
        `;
        
        const requestCourse = await   fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query })
        })
        let dataProvider = await requestCourse.json();
        console.log(dataProvider);
        let listadoHtmlCourse = '';
        for (let course of dataProvider.data.findAllProvider) {
            let courseRow='<tr><td>'+course.id+'</td><td>' + course.name + '</td><td>'+course.category + '</td><td>'+course.description +'</td><td>' +course.direction + '</td><td>'+course.bankAccount+'</td>';
            listadoHtmlCourse+=courseRow;
        }

        document.querySelector('#dataTableCourse tbody').outerHTML = listadoHtmlCourse;
      
       
    } catch (error) {
        console.error('Error:', error);
    }

}



async function deleteProductById(productId) {
    try {
        const mutation = `
            mutation ($productId: String!) {
                deleteProductById(productId: $productId)
            }
        `;

        const response = await fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ 
                query: mutation,
                variables: { productId }
            })
        });

        const data = await response.json();
        loadProducts();
        console.log(data);
        return data.data.deleteProductById;
    } catch (error) {
        loadProducts();
        console.error('Error:', error);
        return null;
    }

}

async function createProduct(inputProduct) {
    try {
        const mutation = `
            mutation ($inputProduct: InputProduct!) {
                createProduct(inputProduct: $inputProduct) {
                    id
                    name
                    buyingPrice
                    salePrice
                    brand
                    category
                    provider {
                        id
                        name
                        category
                        description
                        direction
                        bankAccount
                    }
                }
            }
        `;

        const response = await fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ 
                query: mutation,
                variables: { inputProduct }
            })
        });

        const data = await response.json();
        console.log(data);
        return data.data.createProduct;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

async function saveStudent(){
    try {

        let InputProduct={
            id:undefined,
            name: undefined,
            buyingPrice:undefined,
            salePrice:undefined,
            brand:undefined,
            category:undefined,
            providerId : undefined, 
        };
    
        
        let nameProduct = document.getElementById('nameProduct').value;
        let Brand = document.getElementById('Brand').value;
        let BuyingPrice = document.getElementById('BuyingPrice').value;
        let Category=document.getElementById('Category').value;
        let providerId=document.getElementById('ProviderId').value;
        let SalePrice=document.getElementById('SalePrice').value;

        
        InputProduct.name=nameProduct;
        InputProduct.buyingPrice=BuyingPrice;
        InputProduct.salePrice=SalePrice;
        InputProduct.brand=Brand;
        InputProduct.category=Category;
        InputProduct.providerId=providerId;
        console.log(InputProduct);
        
        createProduct(InputProduct)
        .then(data => {
            console.log('Product creado:', data);
            loadProducts();
        })
        .catch(error => {
            console.error('Error al crear Product:', error);
        });
        
    } catch (error) {
        
    }
}

async function selectStudent(){
    try {
        const query = `
            query {
                findAllCourses {
                    id,
                    name
                  }
            }
        `;
        
        const requestCourse = await   fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query })
        })
        let cursos = await requestCourse.json();
       
        const selectCurso = document.getElementById('courseStudent');
        selectCurso.innerHTML='';
        
        for (let course of cursos.data.findAllCourses) {
            const option = document.createElement('option');
            option.value = course.id;
            option.textContent = course.name;
            selectCurso.appendChild(option);
        }

        
        
    } catch (error) {
        
    }
    
    

}


// async function saveCourse(){
//     try {

//         let inputCourse={
//             id:undefined,
//             name: undefined,
//             category:undefined,
//             teacher:undefined,
//             description:undefined
            
//         };

       
        
//         let nameCourse = document.getElementById('nameCourse').value;
//         let descriptionCourse = document.getElementById('DescriptionCourse').value;
//         let teacherCourse = document.getElementById('teacherCourse').value;
//         let category = document.getElementById('courseCategory').value;
        
//         inputCourse.name=nameCourse;
//         inputCourse.description=descriptionCourse;
//         inputCourse.teacher=teacherCourse;
//         inputCourse.category=category;
        
//         console.log(inputCourse);
        
//         createCourse(inputCourse)
//         .then(data => {
//             console.log('Curso creado:', data);
//             loadProvider();
//         })
//         .catch(error => {
//             console.error('Error al crear curso:', error);
//         });
        
//     } catch (error) {
        
//     }
// }

// async function createCourse(inputCourse) {
//     try {
//         const mutation = `
//             mutation ($inputCourse: InputCourse!) {
//                 createCourse(inputCourse: $inputCourse) {
//                     id
//                     name
//                     category
//                     teacher
//                     description
//                 }
//             }
//         `;

//         const response = await fetch('http://localhost:8080/graphql', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             },
//             body: JSON.stringify({ 
//                 query: mutation,
//                 variables: { inputCourse }
//             })
//         });

//         const data = await response.json();
//         return data.data.createCourse;
//     } catch (error) {
//         console.error('Error:', error);
//         return null;
//     }
// }
