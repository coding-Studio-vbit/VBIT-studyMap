var subjectdb = [

    ['M1','EP','EC','BEEE','EM'],
    ['M2','M3','EG','CP','EP-2'],
    ['M4','DSC++','MFCS','DLD','OOPS'],
    ['BEFA','CO','FLAT','OS','DBMS'],
    ['DAA','DCCN','SE','ELECTIVE','FoM'], 
    ['CNS','CD','WT','PROF. ELECTIVE', 'OPEN ELECTIVE'], 
    ['DM','PoPL','PROF. ELECTIVE 2','PROF. ELECTIVE 3','PROF. ELECTIVE 4'], 
    ['OPEN ELECTIVE', 'PROF. ELECTIVE 5','PROF. ELECTIVE 6', 'MAJOR PROJECT','MAJOR PROJECT']
 
];
var x = localStorage.getItem("yearval");
console.log(x);
var y = localStorage.getItem("semval");
var year = Number(x);
var sem = Number(y);
console.log(year);
console.log(sem);
var xsub = getSubjects(year,sem);
var subjects = xsub[0]
document.getElementById("sub1").innerHTML = subjects[0];
document.getElementById("sub2").innerHTML = subjects[1];
document.getElementById("sub3").innerHTML = subjects[2];
document.getElementById("sub4").innerHTML = subjects[3];
document.getElementById("sub5").innerHTML = subjects[4];
document.getElementById("demo").innerHTML = '<p><strong>* Note: Kindly create a schedule atleast 13 days prior to exam to have a satisfactory completion of the portion!</strong></p>';

function getVars() {
  console.log(subjects);
  var nod = document.getElementById("nod").value;
  var s1 = document.getElementById("s1").value;
  var s2 = document.getElementById("s2").value;
  var s3 = document.getElementById("s3").value;
  var s4 = document.getElementById("s4").value;
  var s5 = document.getElementById("s5").value;


//---------------------------------------------------------------------------------------
  if(nod<5){
    alert("Sorry, a schedule cannot be prepared for 0" + nod + " day(s)! Please try again.");
    return(0);
    document.getElementById("btnb").disabled = false;
  }

  else {
    document.getElementById("btnb").disabled = true;
    document.getElementById("demo").innerHTML = '<h3><strong>Schedule Generated! Scroll down to see it or check your Downloads for the PDF. All the best!</strong></h3>';
  }

//-----------------------------------------------------------------------------------------

  algop1(nod,s1,s2,s3,s4,s5,subjects);

}

function indexOfTT(chk,subj) {
    for(var cc = 0; cc<subj.length;cc++){
        if(chk == subj[cc])
            return cc;
    }
}

function algop1(days,as1,as2,as3,as4,as5,subject) {
  var slot = []
  var rate = []
  for(i=0;i<5;i++)
     slot[i] = 0;
  rate.push(as1);
  rate.push(as2);
  rate.push(as3);
  rate.push(as4);
  rate.push(as5);
  var sum = 0;
  var i,j,k=0;
  var c = [];
  var s = (days-5)*2;
  while(s>4)
    {
        c[0] = s;
        for(i=0;i<5;i++)
            slot[i]+=(rate[i]*(s))/50;
        s=0;
        for(i=0;i<5;i++)
            s+=parseInt(slot[i]);
        s=((days-5)*2)-s;
        c[1] = s;
        if(c[1] - c[0] == 0)
             break;
    }
    for(i=0;i<5;i++)
        if(s>0)
        {
            slot[i] = parseInt(slot[i]) + 1;
            s--;
        }
    console.log('SUBJECT \t SLOTS');
    for(i=0;i<5;i++) {
        slot[i] = slot[i].toFixed(0);
      console.log(subject[i], slot[i]);
    }

    //Enter the round function code here
    for(i=0; i<5; i++)
      sum += parseInt(slot[i]);
    var d = (days-5)*2;
    var diff = sum - d;
    if(diff<0){
      while(diff!=0){
        slot[0] = parseInt(slot[0]) + 1;
        diff += 1;
      }
    }

    else if(diff>0){
      while(diff!=0){
        slot[0] = parseInt(slot[0]) - 1;
        diff -= 1;
      }
    }

    console.log('SUBJECT \t SLOTS');
    for(i=0;i<5;i++)
      console.log(subject[i], slot[i]);
    
    
    
    s=(days-5)*2;
    var flag = [];
    var tt= [];
    for(i=0; i<5; i++)
      flag[i] = 0;

    for(i = 0; i<5;i++)
    {
    k = 0;
    while(slot[i]!=0)
    {
       if(flag[k%s]!=-1)
       {
          tt[k%s] = subject[i];
          flag[k%s]= -1;
          slot[i] -= 1;
          k+=5;
      }
      else
        k+=1;
    }
  }
 
 var iOS;
  var unitorder = [1,2,3,4,5,3,5,1,3,2,4];
  var units = [];
  var counters = [0,0,0,0,0];
  for(i = 0;i<tt.length; i++) {
      iOS = indexOfTT(tt[i],subject);
      units[i] = unitorder[counters[iOS]%11]
      counters[iOS] += 1;
  }


  for(i = 0;i<tt.length; i++) {
  console.log(units[i],tt[i]);
  }

  var morn = [];
  var even = [];
  var munit = [];
  var eveunit = [];
  for(i = 0; i<s/2; i++)
   {
     morn[i] = tt[i];
     munit[i] = units[i];
     even[i] = tt[(s/2)+i];
     eveunit[i] = units[(s/2)+i];
  }
  
  console.log('\n DAY #\t MORNING \t EVENING\n');
  for(i = 0; i<(s/2); i++){
    console.log(i);
    console.log(morn[i],"- unit: ",munit[i], "|\t|", even[i],"- unit: ",eveunit[i]); 
  }



    function tableCreate() {
    var body = document.getElementById('tablepart');
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '3');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < (days); i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 3; j++) {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('\u0020'))
          tr.appendChild(td);
      }
      tbdy.appendChild(tr);
    }
    var tr = document.createElement('tr');
      for (var j = 0; j < 3; j++) {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('\u0020'))
          tr.appendChild(td);
      }
      tbdy.appendChild(tr);
    tbl.appendChild(tbdy);
    body.appendChild(tbl);




    tbl.rows[0].cells[0].innerHTML = "<b>Day</b>";
    tbl.rows[0].cells[1].innerHTML = "<b>Morning Slot</b>";
    tbl.rows[0].cells[2].innerHTML = "<b>Evening Slot</b>";
    var currentDate = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    for(var i = 1; i < tbl.rows.length; i++)
        {
          currentDate.setDate(currentDate.getDate() + 1);
          tbl.rows[i].cells[0].innerHTML = (currentDate.getDate() + '/' + (parseInt(currentDate.getMonth())+1) + '/' + currentDate.getFullYear() + " -- " + weekday[currentDate.getDay()]);
          tbl.rows[i].cells[1].innerHTML = (morn[i-1] + "- Unit: " + munit[i-1]);
          tbl.rows[i].cells[2].innerHTML = (even[i-1] + "- Unit: " + eveunit[i-1]);
        }
        
        tbl.rows[days-4].cells[1].innerHTML = (subject[4] + "- Unit: 1,2,3");
        tbl.rows[days-4].cells[2].innerHTML = (subject[4] + "- Unit: 3,4,5");
        tbl.rows[days-3].cells[1].innerHTML = (subject[3] + "- Unit: 1,2,3");
        tbl.rows[days-3].cells[2].innerHTML = (subject[3] + "- Unit: 3,4,5");
        tbl.rows[days-2].cells[1].innerHTML = (subject[2] + "- Unit: 1,2,3");
        tbl.rows[days-2].cells[2].innerHTML = (subject[2] + "- Unit: 3,4,5");
        tbl.rows[days-1].cells[1].innerHTML = (subject[1] + "- Unit: 1,2,3");
        tbl.rows[days-1].cells[2].innerHTML = (subject[1] + "- Unit: 3,4,5");
        tbl.rows[days].cells[1].innerHTML = (subject[0] + "- Unit: 1,2,3");
        tbl.rows[days].cells[2].innerHTML = (subject[0] + "- Unit: 3,4,5");

  }

  function Export() {
        html2canvas(document.getElementById('tablepart'), {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500
                    }]
                };
                pdfMake.createPdf(docDefinition).download("Schedule.pdf");
            }
        });
  }


  tableCreate();

  Export();
}

function setColor(btn, color){
    var count=1;
    var property = document.getElementById(btn);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#d0d0d0"
        count=0;
    }

}


function getSubjects(year,sem){
 
var subj = [];
switch(year)
{ 
    case 1:             
        if(sem == 1)
            subj = subjectdb.slice(0,1);
        else if(sem == 2)
            subj = subjectdb.slice(1,2);
        else
            console.log('please enter the correct input');
        break;
      
    case 2: 
        if(sem == 1)
            subj = subjectdb.slice(2,3);
        else if(sem == 2)
            subj = subjectdb.slice(3,4);
        else
            console.log('please enter the correct input');
        break;
    
    case 3: 
        if(sem == 1)
            subj = subjectdb.slice(4,5);
        else if(sem == 2)
            subj = subjectdb.slice(5,6);
        else
            console.log('please enter the correct input');
        break;
    
    case 4:
        if(sem == 1)
            subj = subjectdb.slice(6,7);
        else if(sem == 2)
            subj = subjectdb.slice(7,8);
        else
           console.log('please enter the correct input');
        break;
 
    default: console.log('error');
 
}
return subj;
}
