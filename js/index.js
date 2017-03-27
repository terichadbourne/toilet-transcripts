var count = 0;

var students = [
  {
     name: "Rosemary",
     video: "https://www.youtube.com/embed/fuuBOmm2ZXU",
     essay: ["http://placehold.it/1100x850/000000/ffffff?text=RosemaryOnlyHasOnePage"],
     vocab: [
       {
         incorrect: "ungley",
         correct: "ugly",
       },
       {
         incorrect: "pobe",
         correct: "people"
       },
       {
         incorrect: "fluseing",
         correct: "flushing"
       },
       {
         incorrect: "toyit",
         correct: "toilet",
       },
       {
         incorrect: "topow",
         correct: "trouble"
       },
       {
         incorrect: "polpe",
         correct: "people"
       },
       {
         incorrect: "fluses",
         correct: "flush"
       },
       {
         incorrect: "sastls",
         correct: "????",
       },
       {
         incorrect: "toley",
         correct: "toilet"
       },
   ]},
   {
      name: "Nicole",
      video: "https://www.youtube.com/embed/fuuBOmm2ZXU",
          essay: ["http://placehold.it/1100x850/000000/ffffff?text=NicolePage1", "http://placehold.it/1100x850/000000/ffffff?text=NicolePage2"],
      vocab: [
        {
          incorrect: "wasint",
          correct: "wasn't",
        },
        {
          incorrect: "evry",
          correct: "every"
        },
        {
          incorrect: "rilly",
          correct: "really"
        },
        {
          incorrect: "konw",
          correct: "no",
        },
        {
          incorrect: "tolo",
          correct: "toilet"
        },
        {
          incorrect: "Alot",
          correct: "a lot"
        }
    ]
  },
  {
    name: "Matthew",
    video: "https://www.youtube.com/embed/FNtpPW_7H1k",
    essay: ["images/matthew.jpg", "http://placehold.it/1100x850/000000/ffffff?text=MatthewPage2"],
    vocab: [
      {
        incorrect: "wong",
        correct: "wrong",
      },
      {
        incorrect: "throgh",
        correct: "threw"
      },
      {
        incorrect: "speled",
        correct: "spilled"
      },
      {
        incorrect: "evrry were",
        correct: "everywhere"
      },
      {
        incorrect: "dosint",
        correct: "doesn't",
      },
      {
        incorrect: "no",
        correct: "know"
      },
      {
        incorrect: "yus",
        correct: "use"
      },
      {
        incorrect: "toylet",
        correct: "toilet"
      },
      {
        incorrect: "falt",
        correct: "fault",
      },
      {
        incorrect: "how",
        correct: "who"
      },
      {
        incorrect: "wasin't",
        correct: "wasn't"
      },
      {
        incorrect: "min",
        correct: "mine"
      },
      {
        incorrect: "dosint",
        correct: "doesn't",
      },
      {
        incorrect: "new",
        correct: "knew"
      },
      {
        incorrect: "us",
        correct: "use"
      },
      {
        incorrect: "resroom",
        correct: "restroom"
      }
    ]
  },
  {
     name: "Evelyn",
     video: "https://www.youtube.com/embed/fuuBOmm2ZXU",
     essay: ["http://placehold.it/1100x850/000000/ffffff?text=EvelynOnlyHasOnePage"],
     vocab: [
       {
         incorrect: "toloit",
         correct: "toilet",
       },
       {
         incorrect: "discasded",
         correct: "disgusted"
       },
       {
         incorrect: "rest room",
         correct: "restroom"
       }
     ]
   },
   {
      name: "Adriana",
      video: "https://www.youtube.com/embed/fuuBOmm2ZXU",
      essay: ["http://placehold.it/1100x850/000000/ffffff?text=AdrianaOnlyHasOnePage"],
      vocab: [
        {
          incorrect: "smaill",
          correct: "smelled",
        },
        {
          incorrect: "ther",
          correct: "there"
        },
        {
          incorrect: "grose",
          correct: "gross"
        },
        {
          incorrect: "nast",
          correct: "nasty"
        },
        {
          incorrect: "discousentony",
          correct: "disgusting",
        },
        {
          incorrect: "useing",
          correct: "using"
        },
        {
          incorrect: "nastey",
          correct: "nasty"
        },
        {
          incorrect: "fuls",
          correct: "flushed"
        },
        {
          incorrect: "terbo",
          correct: "terrible"
        },
      ]
    },
    {
       name: "Anthony",
       video: "https://www.youtube.com/embed/fuuBOmm2ZXU",
       essay: ["http://placehold.it/1100x850/000000/ffffff?text=AnthonyOnlyHasOnePage"],
       vocab: [
         {
           incorrect: "becuse",
           correct: "because",
         },
         {
           incorrect: "nos",
           correct: "knows"
         },
         {
           incorrect: "no",
           correct: "know"
         },
         {
           incorrect: "of",
           correct: "have"
         },
         {
           incorrect: "fluch",
           correct: "flushed",
         }
       ]
     },
     {
        name: "Anthony R.",
        video: "https://www.youtube.com/embed/fuuBOmm2ZXU",
        essay: ["http://placehold.it/1100x850/000000/ffffff?text=AnthonyROnlyHasOnePage"],
        vocab: [
          {
            incorrect: "wen",
            correct: "when",
          },
          {
            incorrect: "allmost",
            correct: "almost"
          },
          {
            incorrect: "puick",
            correct: "puked"
          },
          {
            incorrect: "smeld",
            correct: "smelled"
          },
          {
            incorrect: "nasste",
            correct: "nasty",
          },
          {
            incorrect: "somebudde",
            correct: "somebody",
          },
          {
            incorrect: "wrog",
            correct: "wrong"
          },
          {
            incorrect: "nastey",
            correct: "nasty"
          },
          {
            incorrect: "toylet",
            correct: "toilet"
          }
        ]
      },
      {
         name: "Nameless Kid",
         video: "https://www.youtube.com/embed/fuuBOmm2ZXU",
         essay: ["http://placehold.it/1100x850/000000/ffffff?text=NamelessKidOnlyHasOnePage"],
         vocab: [
           {
             incorrect: "dusting",
             correct: "disgusting",
           },
           {
             incorrect: "nomder",
             correct: "number"
           },
           {
             incorrect: "fellet",
             correct: "felt"
           },
           {
             incorrect: "people",
             correct: "people"
           },
           {
             incorrect: "shad",
             correct: "should",
           },
           {
             incorrect: "bidin't",
             correct: "didn't",
           },
           {
             incorrect: "hapen",
             correct: "happen"
           },
           {
             incorrect: "cud",
             correct: "could"
           },
           {
             incorrect: "worcing",
             correct: "working"
           },
           {
             incorrect: "lerning",
             correct: "learning"
           },
         ]
       },
       {
          name: "Gloria",
          video: "https://www.youtube.com/embed/fuuBOmm2ZXU",
          essay: ["http://placehold.it/1100x850/000000/ffffff?text=GloriaOnlyHasOnePage"],
          vocab: [
            {
              incorrect: "when ever",
              correct: "whenever",
            },
            {
              incorrect: "lives",
              correct: "leaves"
            },
            {
              incorrect: "their",
              correct: "they're"
            }
          ]
        },
        {
           name: "Omar",
           video: "https://www.youtube.com/embed/fuuBOmm2ZXU",
           essay: ["http://placehold.it/1100x850/000000/ffffff?text=OmarOnlyHasOnePage"],
           vocab: [
             {
               incorrect: "poup",
               correct: "poop",
             },
             {
               incorrect: "toylet",
               correct: "toilet"
             },
             {
               incorrect: "did'nt",
               correct: "didn't"
             },
             {
               incorrect: "flushit",
               correct: "flush it"
             },
             {
               incorrect: "though. up",
               correct: "throw up -OR- though"
             }
           ]
         },
         {
            name: "Nathan",
            video: "https://www.youtube.com/embed/fuuBOmm2ZXU",
            essay: ["http://placehold.it/1100x850/000000/ffffff?text=NathanOnlyHasOnePage"],
            vocab: [
              {
                incorrect: "toylet",
                correct: "toilet"
              },
              {
                incorrect: "rog",
                correct: "wrong"
              },
              {
                incorrect: "dident",
                correct: "didn't"
              }
            ]
          },
          {
             name: "Jason",
             video: "https://www.youtube.com/embed/fuuBOmm2ZXU",
             essay: ["http://placehold.it/1100x850/000000/ffffff?text=JasonOnlyHasOnePage"],
             vocab: [
               {
                 incorrect: "dissapointed",
                 correct: "disappointed"
               },
               {
                 incorrect: "floshed",
                 correct: "flushed"
               },
               {
                 incorrect: "tolit",
                 correct: "toilet"
               },
               {
                 incorrect: "af",
                 correct: "have"
               },
               {
                 incorrect: "consecinc",
                 correct: "consequences"
               },
               {
                 incorrect: "to",
                 correct: "too"
               },
               {
                 incorrect: "thats",
                 correct: "that's"
               },
               {
                 incorrect: "fin",
                 correct: "fine"
               },
               {
                 incorrect: "ten",
                 correct: "then"
               }
             ]
           }
]

$(document).ready(function(){

//show first student at start
displayStudent();
//print entire dictionary to glossary page
buildDictionary();

//NAV FLUSHING

//rotate flush handle (and unrotate siblings) on click
  $("li").on("click", function (){
    console.log("flushed");
    $(this).siblings().removeClass("flushed");
    $(this).addClass("flushed");
  });

//ADVANCING TO NEXT/PREVIOUS STUDENT RECORD

$("#student-div div").on("click", function (){
   if ($(this).hasClass("arrow-left")) {
      console.log("previous student");
      previousStudent ();
    } else {
      console.log("next student");
      nextStudent ();
    }
    displayStudent ();
  });

function displayStudent(){
    //write student name
    $("#student-name").text( students[count].name);
    //advance video to next object
    $("iframe").attr( "src", students[count].video);
    //advance essay image to next object (first or only page)
    $("#essay img").attr( "src", students[count].essay[0]);
    //decide whether to display nav
    displayNav ();
    displayVocab();
}

function displayVocab(){
  //clear the vocab field
  $("#vocab").empty();
  //sort the vocab array by incorrect spelling
  students[count].vocab.sort(alphaIncorrect);
  //write vocab to page
  students[count].vocab.forEach(function(el,i){
    $("#vocab").append("<del>");
    $("#vocab del:last-of-type").append(students[count].vocab[i].incorrect);
    $("#vocab").append(" <ins>");
    $("#vocab ins:last-of-type").append(students[count].vocab[i].correct);
    $("#vocab").append("<br>");
  });
}

//ALHABETIZE BY INCORRECT VOCAB SPELLING
//to use this, reference:  students[count].vocab.sort(alphaIncorrect);
function alphaIncorrect(a,b) {
  if (a.incorrect < b.incorrect)
    return -1;
  if (a.incorrect > b.incorrect)
    return 1;
  return 0;
}


//MAKE A COMPLETE VOCAB LIST FROM ALL RECORDS
function buildDictionary (){
 //create empty dictionary
 var dictionary =[];
 //put all vocab entries from each student into dictionary
 students.forEach(function(el,i){
  dictionary = dictionary.concat(students[i].vocab);
});
 //sort dictionary alpabetically by incorrect spellings
 dictionary.sort(alphaIncorrect);
//print dictionary to glossary page
 dictionary.forEach(function(el,i){
    $("#glossary").append("<span>");
    $("#glossary span:last-of-type").append(dictionary[i].incorrect);
    $("#glossary").append(" <ins>");
    $("#glossary ins:last-of-type").append(dictionary[i].correct);
    $("#glossary").append("<br>");
  });
}

//ADVJUSTING THE COUNT TO CHANGE STUDENT RECORD

//runs when right arrow is clicked to advance to next student record
function nextStudent(){
  //if it's on the last picture in the array, set count to first pic in array
  if (count == (students.length - 1)) {
   count = 0;
  }
  // otherwise for any other pic, just add 1 to count
  else  {
    count +=1;
  }
}

//runs when left arrow is clicked to adjust to previous student record
function previousStudent(){
  //if it's on the first student in the array, set count to last student in array
  if (count == 0) {
   count = (students.length - 1);
  }
  // otherwise for any other student, just subtract 1 from count
  else  {
    count = count - 1;
  }
}


  //on click on nav-student, advance forward or back to next record


//DECIDING WHETHER YOU NEED ESSAY NAV
//when you load the student object essay, count the pages
function displayNav (){
  if ($(students[count].essay).length == 2) {
    // if two, show #essay-arrows (display: block)
    $("#essay-arrows").removeClass("hidden");
    //mark left arrow disabled since we're on the first page
    $("#essay .left-arrow").addClass("disabled");
    $("#essay .right-arrow").removeClass("disabled");
   // else if there's only one page, hide the essay nav
  } else {
        $("#essay-arrows").addClass("hidden");
  }
};





//NAVIGATING ESSAY PAGES (when there's more than one)

//on click on #nav-essay (which will only exist when 2 pages),
// advance forward or back to next essay page

  $("#essay div div").on("click", function (){
   $(this).toggleClass("disabled");
   $(this).siblings().toggleClass("disabled");
   //if you clicked left, show 1st page
   if ($(this).hasClass("arrow-left")) {
      console.log("previous page");
      $("img").attr( "src", students[count].essay[0]);
  //if you clicked right, show 2nd page
    } else {
      console.log("next page");
      $("img").attr( "src", students[count].essay[1]);
    }
  });


});
