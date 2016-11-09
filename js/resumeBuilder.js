/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
    "jobs": [{
            "employer": "Acurian",
            "title": "Web Content Manager/Designer",
            "location": "Horsham, PA",
            "dates": "June 2016 - Current",
            "description": "Designing and developing WordPress sites, Designing and developing Emails, QA Android Apps"
        },

        {
            "employer": "Red Development Studio LLC",
            "title": "Front-End Contractor",
            "location": "Philadelphia, PA",
            "dates": "September 2015 - Current",
            "description": "Part-time contractor creating websites for clients"
        },

        {
            "employer": "Abington Memorial Hospital",
            "title": "Medical Receptionist",
            "location": "Willow Grove, PA",
            "dates": "August 2015 - June 2016",
            "description": "Scheduled appointments, Managed patient correspondence, Handled billing, CPR certified"
        },

        {
            "employer": "Wegman's Pub",
            "title": "Attendent/Server",
            "location": "North Wales, PA",
            "dates": "March 2015 - August 2015",
            "description": "Interacted with customers in a friendly manner, Responsible for providing an outstanding customer experience"
        },

        {
            "employer": "Friendly's Ice Cream",
            "title": "Server",
            "location": "Plainville, CT",
            "dates": "August 2013 - October 2014",
            "description": "Serving in a high volume and fast paced environment, Managing multiple customers order and checks"
        },

        {
            "employer": "Tunxis Advising Center",
            "title": "Student Assistant Internship",
            "location": "Farmington, CT",
            "dates": "November 2013 - May 2014",
            "description": "Scheduling advising and counseling appointments, Providing office support: Typing, data entry, copying, faxing, and filing, Utilizing Administrative Software Application: Banner"
        }
    ]
};

var projects = {
    "projects": [


        {
            "title": "Portfolio",
            "dates": "2016",
            "description": "Website created from a PDF mockup",
            "images": ["images/unicorncoder.jpg"],
            "url": "http://www.unicorncoder.com/"

        },

        {
            "title": "Personal Website",
            "dates": "2016",
            "description": "Responsive Personal Site",
            "images": ["images/personal.jpg"],
            "url": "http://www.lindaallen.info/"

        },

        {
            "title": "Yang's Massage",
            "dates": "2015",
            "description": "Responsive marketing website for a local massage studio",
            "images": ["images/yangs.jpg"],
            "url": "http://yangsmassage.com"

        },

        {
            "title": "Burkholder Design Center",
            "dates": "2016",
            "description": "Static website for Burkholder Design Center",
            "images": ["images/burkholder.jpg"],
            "url": "https://www.burkholderdesigncenter.com"

        },

        {
            "title": "Emmy's Junk-N-Stuff",
            "dates": "2016",
            "description": "E-Commerce and Marketing site for a local consignment store.",
            "images": ["images/emmys.jpg"],
            "url": "https://www.emmysjunknstuff.com"

        }

    ]
};

var bio = {
    "name": "Linda Allen",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "484-801-7565",
        "email": "lindaallenx@gmail.com",
        "github": "lindaallen",
        "twitter": "@UnicornCoder",
        "location": "Philadelphia"
    },
    "welcomeMessage": "Self taught Front-End Web Developer.",
    "skills": ["HTML5", "CSS3", "Photoshop", "WordPress", "Git", ],
    "bioPic": "images/linda.jpg"
};

var education = {
    "schools": [{
        "name": "Tunxis Community College",
        "city": "Farmington, CT",
        "degree": "AS",
        "majors": ["Business Office Technology"],
        "dates": 2011,
        "location": "Farmington, CT"
            // "url": "http://example.com"

    }],
    "onlineCourses": [{
        "title": "Intro to Computer Science",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/course/cs101"
    }]
};

// function to display the bio section of the resume
bio.display = function() {

    // header section
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);

    // contacts section

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    // create contacts array

    var contactArray = [formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation];

    // loop thru contacts to display under header
    contactArray.forEach(function(contact) {
        $("#topContacts").append(contact);
        $("#footerContacts").append(contact);
    });

    // Welcome Message section under contacts

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
    $("#header").append(HTMLskillsStart);

    // loop thru Skills under Contacts section

    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#header").append(formattedSkills);
    });
};

// function to display work history information
work.display = function() {
    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

        // concat employer name and job title
        var formattedWorkTitleFinal = formattedEmployer + formattedWorkTitle;

        // create work array to loop over
        var workArray = [formattedWorkDescription, formattedWorkLocation, formattedWorkDates, formattedWorkTitleFinal];

        workArray.forEach(function(work) {
            $(".work-entry:last").prepend(work);
        });

    });
};

// function to display projects
projects.display = function() {
    projects.projects.forEach(function(item) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append("<br><div><hr></div>");

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", item.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", item.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", item.description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", item.images);
        var projectsURL = item.url;

        // Make Project Title a clickable link
        formattedProjectTitle = formattedProjectTitle.replace("#", projectsURL);

        // create projects array to loop over
        var projectsArray = [formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage];

        projectsArray.forEach(function(project) {
            $(".project-entry:last").append(project);
        });

    });
};

// function to display schools and online courses
education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var educationURL = school.url;

        // concat school name and degree obtained
        var formattedSchoolNameFinal = formattedSchoolName + formattedSchoolDegree;

        // make school name a clickable link
        var formattedSchoolNameFinal = formattedSchoolNameFinal.replace("#", educationURL);

        // create education array to loop over
        var educationArray = [formattedSchoolMajor, formattedSchoolLocation, formattedSchoolDates, formattedSchoolNameFinal];

        educationArray.forEach(function(education) {
            $(".education-entry:last").prepend(education);
        });

    });

    // start online courses section

    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(moocs) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", moocs.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", moocs.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", moocs.date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", moocs.url);

        // make url strings clickable links
        var formattedOnlineURL = formattedOnlineURL.replace("#", moocs.url);

        // concat course title and university name
        var formattedOnlineProvider = formattedOnlineTitle + formattedOnlineSchool;

        // make course titles clickable links
        var formattedOnlineProvider = formattedOnlineProvider.replace("#", moocs.url);

        // create moocs array to loop over

        var moocsArray = [formattedOnlineProvider, formattedOnlineDates, formattedOnlineURL];

        moocsArray.forEach(function(course) {
            $(".education-entry:last").append(course);
        });

    });
};

// call functions from above

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);


//  if(bio.skills.length > 0) {
//      $("#header").append(HTMLskillsStart);
//      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//      $("#skills").append(formattedSkill);
//      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//      $("#skills").append(formattedSkill);
//      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
//      $("#skills").append(formattedSkill);
//      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
//      $("#skills").append(formattedSkill);
//  }

//  for (job in work.jobs) {
//      $("#workExperience").append(HTMLworkStart);

//      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//      var formattedTitle = HTMLworkEmployer.replace("%data%", work.jobs[job].title);
//      var formattedEmployerTitle = formattedEmployer + formattedTitle;

//      $(".work-entry:last").append(formattedEmployerTitle);
//  }

// for (job in work.jobs) {

//  $("#workExperience").append(HTMLworkStart);

//  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//  var formattedEmployerTitle = formattedEmployer + formattedTitle;
//  $(".work-entry:last").append(formattedEmployerTitle);

//  var formattedDates = HtmlworkDates.replace("%data%", work.jobs[job].dates);
//  $(".work-entry:last").append(formattedDates);

//  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
//  $(".work-entry:last".append(formattedDescription));

// }