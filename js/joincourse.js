//const cc=document.getElementsById('coursecode').value;

const join_form = document.querySelector('#joinform');
join_form.addEventListener('submit',(e) =>{

  var cc=document.getElementById('coursecode').value;
//  console.log(cc);
  var f=false;
  var email=firebase.auth().currentUser.email;
  db.collection('Courses').add({
    Title:"",
    Code:cc,
    CreditHr:"",
    Members:email
  }).then(() => {
    createCourse.reset();
    /*document.getElementById("addform").style.display = "none";
    document.getElementById("courelist").style.display = "block";*/
    window.location.reload();
	}).catch(err =>{
  	alert("There seems to be a problem. Please try again.");
  })

})



  db.collection('Courses').get().then(snapshot =>{
    snapshot.forEach(doc =>{
      let cc = doc.data().Code;
    //  console.log(cc);
      db.collection('Courses').where('Code' , '==', cc).get().then(snapshotDoc =>{
      //  console.log(doc.data().Code);
       let meme=snapshotDoc.docs.Members;
       if(snapshotDoc.docs.Members > doc.data().Members||snapshotDoc.docs.Members < doc.data().Members)
      {
        meme+=',';
        meme+=doc.data().Members;


      }
      //  console.log(meme);
        doc.data().Members=meme;
        doc.data().Title=snapshotDoc.docs.Title;
        doc.data().CreditHr=snapshotDoc.docs.CreditHr;
      })
    //  console.log(doc.data().Members);
    })

  })
  /*if(f==true)
  {
    join_form.reset();
    location.reload();

  }
else{
  alert("Invalid Course Code");
  join_form.reset();
}*/


/*  setTimeout(function(){
  document.location.href="#";
},50000);



})
*/
function addMember(email,docId)
{
  /*var html ='';
   html+=email;
   html+=',';
   html+=docID.data().Members;
   docID.data().Members=html;*/

   //console.log(docID.data().Members);

}


/*
var idList=new Array();
var codeList=new Array();
 db.collection('Courses').where('Code','>','').get().then(snapshot =>{
    var i=0;
    snapshot.docs.forEach(doc =>{

      //docID(doc.id);
       idList[i]=doc.id;
       codeList[i]=doc.data().Code;

       console.log(idList[i].data().Members);
       i=i+1;

    })
console.log(idList);
console.log(codeList);

  })

/*
db.collection('Courses').get().then(snapshot =>{
snapshot.docs.forEach(doc =>{
  if(doc.id == idList[0])
  {
    console.log('works');
  }
})
})*/
//const joinForm =(data) =>{
//  e.preventDefault();










/*

db.collection("Courses").get().then(snapshot =>{
  snapshot.docs.forEach(doc =>{
    const course = doc.data();
  //  `${course.title}`
    // `` = template string
    if(`${course.Code}`==cc )
    {
  const m=``;
  m+=`${course.Members} `+firebase.auth().currentUser.email;
  //snapshot.docs.update({"Members":FieldValue.arrayUnion(user.email)});
  snapshot.docs.update({Members:m}).then( function() {
    console.log('afksjf');
  //  window.location.href=''
  window.location.reload();
})
}
})
})/*.catch(err =>{
alert("Invalid Course Code.");
})*/


function AddCourseForm(){
  document.getElementById("addform").style.display = "block";
  document.getElementById("courelist").style.display = "none";
}

function courseForm(){
  document.getElementById("joinform").style.display = "block";
  document.getElementById("courelist").style.display = "none";
}
