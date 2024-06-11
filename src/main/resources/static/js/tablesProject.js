loadStudents();
loadCourse();


async function loadStudents(){

    try {
        const query = `
            query {
                findAllStudents {
                    id
                    name
                    lastName
                    age
                    email,
                    lastName
                    course {
                        id
                        name
                        category
                        teacher
                        description
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
        
        let listadoHtml = '';
        for (let student of dataStudent.data.findAllStudents) {
            let studentRow='<tr><td>'+student.id+'</td><td>' + 
            student.name + '</td><td>'+student.lastName + '</td><td>' +
            student.age + '</td><td>' +student.email + '</td><td>'+
            student.course.name + '</td><td><a class="btn btn-danger btn-circle" onclick=" deleteStudentById('+ student.id +')"><i class="fas fa-trash"></i></a></td>';

            listadoHtml+=studentRow;
            
        }

        document.querySelector('#studentTable tbody').outerHTML = listadoHtml;
      
       
    } catch (error) {
        console.error('Error:', error);
    }

}

async function loadCourse(){

    try {
        const query = `
            query {
                findAllCourses {
                    id,
                    name,
                    category,
                    description,
                    teacher
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
        let dataCourse = await requestCourse.json();
        
        let listadoHtmlCourse = '';
        for (let course of dataCourse.data.findAllCourses) {
            let courseRow='<tr><td>'+course.id+'</td><td>' + course.name + '</td><td>'+course.category + '</td><td>'+course.teacher +'</td><td>' +course.description + '</td>';
            listadoHtmlCourse+=courseRow;
        }

        document.querySelector('#dataTableCourse tbody').outerHTML = listadoHtmlCourse;
      
       
    } catch (error) {
        console.error('Error:', error);
    }

}



async function deleteStudentById(studentId) {
    try {
        const mutation = `
            mutation ($studentId: String!) {
                deleteStudentById(studentId: $studentId)
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
                variables: { studentId }
            })
        });

        const data = await response.json();
        loadStudents();
        return data.data.deleteStudentById;
    } catch (error) {
        loadStudents();
        console.error('Error:', error);
        return null;
    }

}

async function createStudent(inputStudent) {
    try {
        const mutation = `
            mutation ($inputStudent: InputStudent!) {
                createStudent(inputStudent: $inputStudent) {
                    id
                    name
                    lastName
                    age
                    email
                    course {
                        id
                        name
                        category
                        teacher
                        description
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
                variables: { inputStudent }
            })
        });

        const data = await response.json();
        console.log(data);
        return data.data.createStudent;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

async function saveStudent(){
    try {

        let inputStudent={
            id:undefined,
            name: undefined,
            lastName:undefined,
            age:undefined,
            email:undefined,
            courseId : undefined, 
        };

        
        let nameStudent = document.getElementById('nameStudent').value;
        let lastNameStudent = document.getElementById('lastNameStudent').value;
        let age = document.getElementById('age').value;
        let email=document.getElementById('email').value;
        let courseId=document.getElementById('courseStudent').value;

        
        inputStudent.name=nameStudent;
        inputStudent.lastName=lastNameStudent;
        inputStudent.age=age;
        inputStudent.email=email;
        inputStudent.courseId=courseId;
        console.log(inputStudent);
        
        createStudent(inputStudent)
        .then(data => {
            console.log('Estudiante creado:', data);
            loadStudents();
        })
        .catch(error => {
            console.error('Error al crear estudiante:', error);
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


async function saveCourse(){
    try {

        let inputCourse={
            id:undefined,
            name: undefined,
            category:undefined,
            teacher:undefined,
            description:undefined
            
        };

       
        
        let nameCourse = document.getElementById('nameCourse').value;
        let descriptionCourse = document.getElementById('DescriptionCourse').value;
        let teacherCourse = document.getElementById('teacherCourse').value;
        let category = document.getElementById('courseCategory').value;
        
        inputCourse.name=nameCourse;
        inputCourse.description=descriptionCourse;
        inputCourse.teacher=teacherCourse;
        inputCourse.category=category;
        
        console.log(inputCourse);
        
        createCourse(inputCourse)
        .then(data => {
            console.log('Curso creado:', data);
            loadCourse();
        })
        .catch(error => {
            console.error('Error al crear curso:', error);
        });
        
    } catch (error) {
        
    }
}

async function createCourse(inputCourse) {
    try {
        const mutation = `
            mutation ($inputCourse: InputCourse!) {
                createCourse(inputCourse: $inputCourse) {
                    id
                    name
                    category
                    teacher
                    description
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
                variables: { inputCourse }
            })
        });

        const data = await response.json();
        return data.data.createCourse;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
