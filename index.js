//  fetch html Node 
const contend = document.getElementById("contend")

 const Add_btn = document.getElementById("add-btn")

 const input_type = document.querySelector('#input-type')
 
const container =document.querySelector('#container')

 const add_container = document.querySelector('#add-container')

 const form_input = document.getElementById('form-input')

 const demo = document.getElementById('demo')

const add_field_btn =document.getElementById('add-field-btn')

const delete_btn = document.getElementById('delete-btn')

const form_input_right = document.getElementById('form-input-right')

Add_btn.addEventListener('click',(e)=>{
    //  create Element
     const div1 = document.createElement('div')

    //    added attribute in tage 
     const a = document.createAttribute('class')
     a.value='contend flex '
     div1.setAttributeNode(a) 

    // append element 
     div1.innerHTML = contend.innerHTML
     console.log(" Form added")
     container.append(div1) ;   
})
  
  //  field input handeler
 add_field_btn.addEventListener('click', ()=>{
      
    const inputText =document.getElementById("form-input").value
    const selectOption = document.getElementById("input-type").value
     console.log( "Form created ", inputText , selectOption)
    //   create atrribute for persone 
//    
    //  create Element
    const div = document.createElement('div')
    //    added attribute in tage 
     const a = document.createAttribute('class')
     const changeId = document.createAttribute('id')
     a.value='contend flex person-mar'
     div.setAttributeNode(a) 
     div.setAttributeNode(changeId)
     div.innerHTML = contend.innerHTML
    
    container.insertBefore(div, demo) 
   
})
//   handle Delete button 
 delete_btn.addEventListener('click',(event)=>{
   console.log(event.target.value)
   const id = event.target.value ;
   const parentelemennt = document.getElementById(id)

    parentelemennt.removeChild()


  })

