var bio = {
    name: "Haitham Alfehaid",
    role: "Front End Developer",
    contacts: {
        mobile: "320-640-6565",
        email: "alfehaid.h@gmail.com",
        github: "https://github.com/alfehaid/",
        twitter: "optional",
        location: "Riyadh-Saudi Arabia"
    },
    welcomeMessage: "welcome to my resume , hope you are interesting",
    skills: ["Coding", "Designing"],
    bioPic: ["images/150.png"]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").prepend(formattedLocation);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").prepend(formattedTwitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").prepend(formattedGitHub);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").prepend(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").prepend(formattedMobile);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);
var formattedworkDescription = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedworkDescription);

var formattedname = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedname);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedemail);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedgithub);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(formattedtwitter);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedlocation);

$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);

var work = {
    job: [{
            employer: "King Saud University",
            title: "Programmer",
            location: "Riyadh-Saudi",
            dates: "March - 2017 Tell Now",
            description: "working on many internal web application to support HQ vision which is \" Paper less\" ."
        },
        {
            employer: "Aramco (COOP)",
            title: "Trainig",
            location: "Dharan",
            dates: "3 Months",
            description: "COOP 3 months trainig in Saudi Aramco in IT depertment in PHP environment."
        }
    ]
};

function displayWork() {
    $("#workExperience").append(HTMLworkStart);
    for(i in work.job) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.job[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.job[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.job[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.job[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();

var education = {
    schools: [{
            name: "King Saud University",
            city: "Riyadh-Saudi",
            degree: "BCS",
            dates: "2017",
            major: "Computer Secinces",
        },
        {
            name: "Buridah Tech",
            city: "Buraidah",
            degree: "Deploma",
            dates: "2015",
            major: "Programming"
        }
    ],
    onlineCourses: [{
        title: "Front End Nanoegree",
        school: "Udacity",
        dates: "2017",
        major: "html.css.js"
    }]
}

function displayEducation() {
    $("#education").append(HTMLschoolStart);
    for(i in education.schools) {
        var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[i].name);
        $(".education-entry:last").append(formattedschoolname);
        var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedschooldegree);
        var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedschooldates);
        var formattedschoolcity = HTMLschoolLocation.replace("%data%", education.schools[i].city);
        $(".education-entry:last").append(formattedschoolcity);
        var formattedschollmajors = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        $(".education-entry:last").append(formattedschollmajors);
    }

    for(i in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedonlineschoolTitle = formattedonlineTitle + formattedonlineSchool;
        $(".education-entry:last").append(formattedonlineschoolTitle);
        var formattedonlineschooldates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedonlineschooldates);
    }
}
displayEducation();

var projects = {
    projects: [{
        title: "Mobile Application for Student Registration",
        dates: "2011",
        description: "Mobile Application for Student Registration",
        images: ["images/project.png"]
    }]
}

function displayProject() {
    $("#projects").append(HTMLprojectStart);
    for(project in projects.projects) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImage);
    }
}
displayProject();
$("#mapDiv").append(googleMap);
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
// var bio={name:"Haitham Alfehaid",role:"Front End Developer",
// contacts:{mobile: "320-640-6565",email:"alfehaid.h@gmail.com",github:"https://github.com/alfehaid/",
// twitter: "optional",location: "Riyadh-Saudi Arabia"},
// welcomeMessage: "welcome to my resume , hope you are interesting",skills: [ "Coding", "Designing"],bioPic: ["images/150.png"]}

// var formattedRole =HTMLheaderRole.replace("%data%",bio.role);$("#header").prepend(formattedRole);
// var formattedName =HTMLheaderName.replace("%data%",bio.name);$("#header").prepend(formattedName);

// var formattedLocation =HTMLlocation.replace("%data%",bio.contacts.location);$("#topContacts").prepend(formattedLocation);
// var formattedTwitter =HTMLtwitter.replace("%data%",bio.contacts.twitter);$("#topContacts").prepend(formattedTwitter);
// var formattedGitHub =HTMLgithub.replace("%data%",bio.contacts.github);$("#topContacts").prepend(formattedGitHub);
// var formattedEmail =HTMLemail.replace("%data%",bio.contacts.email);$("#topContacts").prepend(formattedEmail);
// var formattedMobile =HTMLmobile.replace("%data%",bio.contacts.mobile);$("#topContacts").prepend(formattedMobile);

// var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);$("#header").append(formattedPic);
// var formattedworkDescription = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage );$("#header").append(formattedworkDescription);

// var formattedname = HTMLmobile.replace("%data%", bio.contacts.mobile );$("#footerContacts").append(formattedname);
// var formattedemail = HTMLemail.replace("%data%", bio.contacts.email );$("#footerContacts").append(formattedemail);
// var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github );$("#footerContacts").append(formattedgithub);
// var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter );$("#footerContacts").append(formattedtwitter);
// var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location );$("#footerContacts").append(formattedlocation);

// $("#header").append(HTMLskillsStart);var formattedSkill = HTMLskills.replace("%data%", bio.skills[0] );
// $("#skills").append(formattedSkill);var formattedSkill = HTMLskills.replace("%data%", bio.skills[1] );
// $("#skills").append(formattedSkill);

// var work = {job: [
// {employer: "King Saud University",title: "Programmer",location: "Riyadh-Saudi",dates: "March - 2017 Tell Now",description: "working on many internal web application to support HQ vision which is \" Paper less\" ."},
// {employer: "Aramco (COOP)",title: "Trainig",location: "Dharan",dates: "3 Months",description: "COOP 3 months trainig in Saudi Aramco in IT depertment in PHP environment."}]};

// function displayWork() {
// $("#workExperience").append(HTMLworkStart);
// for (i in work.job) {
// var formattedEmployer = HTMLworkEmployer.replace("%data%", work.job[i].employer);
// var formattedTitle = HTMLworkTitle.replace("%data%", work.job[i].title);
// var formattedEmployerTitle = formattedEmployer + formattedTitle;$(".work-entry:last").append(formattedEmployerTitle);
// var formattedDates = HTMLworkDates.replace("%data%", work.job[i].dates);$(".work-entry:last").append(formattedDates);
// var formattedDescription = HTMLworkDescription.replace("%data%", work.job[i].description);$(".work-entry:last").append(formattedDescription);}}
// displayWork();

// var education = {
// schools: [
// {name:"King Saud University",city:"Riyadh-Saudi",degree:"BCS",dates:"2017",major:"Computer Secinces",},
// {name:"Buridah Tech",city:"Buraidah",degree:"Deploma",dates:"2015",major:"Programming"}],
// onlineCourses: [
// {title:"Front End Nanoegree",school:"Udacity",dates:"2017",major:"html.css.js"}]}

// function displayEducation() {
// $("#education").append(HTMLschoolStart);
// for (i in education.schools){
// var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[i].name);$(".education-entry:last").append(formattedschoolname);
// var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);$(".education-entry:last").append(formattedschooldegree);
// var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[i].dates);$(".education-entry:last").append(formattedschooldates);
// var formattedschoolcity = HTMLschoolLocation.replace("%data%", education.schools[i].city);$(".education-entry:last").append(formattedschoolcity);
// var formattedschollmajors = HTMLschoolMajor.replace("%data%", education.schools[i].major);$(".education-entry:last").append(formattedschollmajors);}

// for (i in education.onlineCourses){
// $("#education").append(HTMLonlineClasses);
// var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
// var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
// var formattedonlineschoolTitle = formattedonlineTitle + formattedonlineSchool;$(".education-entry:last").append(formattedonlineschoolTitle);
// var formattedonlineschooldates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);$(".education-entry:last").append(formattedonlineschooldates);}}
// displayEducation();

// var projects = {
// projects:[{title:"Mobile Application for Student Registration",dates:"2011",description:"Mobile Application for Student Registration",images: ["images/project.png"]}]}

// function displayProject() {
// $("#projects").append(HTMLprojectStart);
// for (project in projects.projects){
// var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);$(".project-entry:last").append(formattedTitle);
// var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);$(".project-entry:last").append(formattedDates);
// var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);$(".project-entry:last").append(formattedDescription);
// var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);$(".project-entry:last").append(formattedImage);}}
// displayProject();
// $("#mapDiv").append(googleMap);
// $(document).click(function(loc) {var x = loc.pageX;var y = loc.pageY;logClicks(x,y);});
