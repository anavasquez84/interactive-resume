
//BIO
var bio = {
    "name" : "Ana Vasquez",
    "role" : "Front-End Web Witch",
    "contacts" : {
        "mobile"    : "666.666.6666",
        "email"     : "ana.vasquez84@gmail.com",
        "github"    : "anavasquez84",
        "location"  : "Brooklyn, NY"
    },
    "welcomeMessage" : "Welcome to my JavaScript project!",
    "skills"         : ['Front-End Web Development', 'Non-Profit Program Development', 'Community Outreach', 'The Dark Arts'],
    "biopic"         : "images/fry.jpg"
}

bio.display =function() {
    var name = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var city = HTMLlocation.replace("%data%", bio.contacts.location);
    var contacts = [mobile, email, github, city];
    var biopic = HTMLbioPic.replace("%data%", bio.biopic);
    var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $('#header').prepend(role).prepend(name);
    $('#topContacts').append(contacts);
    $('#header').append(biopic).append(welcomeMessage);
    $('#header').append(HTMLskillsStart);
        for(skill in bio.skills){
            $('#header').append(HTMLskills.replace("%data%", bio.skills[skill]));
        }
    $('#footerContacts').append(contacts);
}

bio.display();

//WORK
var work = {
    "jobs" : [
    {
        "employer" : "Open School Project",
        "title" : "Community Manager",
        "dates" : "04/2014--03/2015",
        "location" : "Long Island City, NY",
        "description" : "Increased client engagement through the management of social media channels and newsletter campaigns"
    },
    {
        "employer" : "Self-Employed",
        "title" : "Freelance SEO Content Writer",
        "dates" : "08/2013--09/2014",
        "location" : "Brooklyn, NY",
        "description" : "Researched, developed, and edited text for websites and articles; managed SEO phrases and keywords within content."
    },
    {
        "employer" : "ACE Programs",
        "title" : "Education Assistant",
        "dates" : "08/2012--07/2013",
        "location" : "New York, NY",
        "description" : "Worked closely with the Director of Education and Vocational Education Assistant to implement educational component to vocational rehabilitation program"
        }
    ]
}

work.display = function(){
    for(job in work.jobs){
        $('#workExperience').append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var title = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedEmployerTitle =  employer + title;
        $('.work-entry:last').append(formattedEmployerTitle);
        var location = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        $('.work-entry:last').append(location);
        var dates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        $('.work-entry:last').append(dates);
        var description = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('.work-entry:last').append(description);
    }
}
work.display();

//PROJECTS 
var projects = {
    "portfolio" : [
    {
        "title" : "Portfolio Page",
        "dates" : "2015",
        "description" : "From Udacity's HTML/CSS course",
        "image": "images/197x148.gif"
        }
    ]
}

projects.display = function(){
    for(project in projects.portfolio){
        $('#projects').append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace('%data%', projects.portfolio[project].title);
        var projectDates = HTMLprojectDates.replace('%data%', projects.portfolio[project].dates);
        var projectDescription = HTMLprojectDescription.replace('%data%',projects.portfolio[project].description);
        var projectImage = HTMLprojectImage.replace('%data%', projects.portfolio[project].image);
        var formattedProject = projectTitle + projectDates + projectDescription + projectImage;
        $('.project-entry:last').append(formattedProject);
    }
}
projects.display();


//EDUCATION
var education = {
    "schools" : [
        {
        "name" : "Borough of Manhattan Community College",
        "location" : "New York, NY",
        "degree" : "Associate of Arts",
        "major" : "Liberal Arts",
        "dates" : "2013"
        },
        {
        "name" : "Science Academy of South Texas",
        "location" : "Mercedes, TX", 
        "degree" : "High School Diploma",
        "major" : "N/A ",
        "dates" : "2003"
        }
    ],

    "onlineCourses" : [
    {
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "dates" : "2015",
        "url" : "www.udacity.com"
    },
      {
        "title" : "jQuery",
        "school" : "Code Academy",
        "dates" : "2015",
        "url" : "www.codeacademy.com"
    },
        {
        "title" : "JavaScript",
        "school" : "Code Academy",
        "dates" : "2015",
        "url" : "www.codeacademy.com"
    },
        {
        "title" : "HTML/CSS",
        "school" : "Code Academy",
        "dates" : "2014",
        "url" : "www.codeacademy.com"
    }
    
    ]
}

education.display = function(){
    for(school in education.schools){
        $('#education').append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
        var schoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
        var schoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        var schoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
        var schoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
        var formattedDegree = schoolName + schoolLocation + schoolDegree + schoolDates + schoolMajor;
        $('.education-entry:last').append(formattedDegree);
    }

//ONLINE CLASSES

    $('.education-entry:last').append(HTMLonlineClasses);
        for(online in education.onlineCourses){
            var onlineTitle =  HTMLonlineTitle.replace('%data%', education.onlineCourses[online].title);
            var onlineSchool =  HTMLonlineSchool.replace('%data%', education.onlineCourses[online].school);
            var onlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[online].dates);
            var onlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[online].url);
            var formattedOnline = onlineTitle + onlineSchool +onlineDates + onlineURL;
            $('.education-entry:last').append(formattedOnline);
        }
}

education.display();

//MAPS
$('#mapDiv').append(googleMap);

