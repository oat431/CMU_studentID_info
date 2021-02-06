function CheckStudent() {
    let StudentResult = document.getElementById("StudentResult");
    StudentResult = clearData(StudentResult);
    
    let SID = document.getElementById('SID').value;
    
    if (! IsValidFormat(SID)) return; 
    
    let log = document.createElement("ul");
    
    let student = {
        "year": SID.substring(0, 2),
        "faculty": SID.substring(2, 4),
        "degreeType": parseInt(SID.substring(4, 5)),
        "courseType": parseInt(SID.substring(5, 6)),
        "personalType": parseInt(SID.substring(6, 7)),
        "number": SID.substring(7, 9)  
    };

    log.appendChild(checkYear(student.year));
    log.appendChild(checkFaculty(student.faculty));
    log.appendChild(checkDegreeType(student.degreeType));
    log.appendChild(checkCourse(student.courseType));
    log.appendChild(checkPersonalType(student.personalType));
    log.appendChild(createNo(student.number));
    StudentResult.appendChild(log);
}

function IsValidFormat(SID) {
    if(!/^([0-9])*$/.test(SID)){
        alert("should contain only number");
        document.getElementById('SID').value = '';
        return false;
    }
    return true;
}

function clearData(elem) {
    if(elem.hasChildNodes()){
        while (elem.firstChild) {
            elem.removeChild(elem.lastChild);
        }
    } 
    return elem;
}

function checkYear(val) {
    let li = document.createElement('li');
    let text = document.createTextNode('year of education : ');
    if(parseInt(val) > 0 && parseInt(val) < 100){
        text.appendData(`${val}`);
    }else{
        text.appendData(`Invalid year of education`);
    }
    li.appendChild(text);
    return li;
}

function checkFaculty(val) {
    let faculty = [
        'Humanities','Education','Fine Arts','Social Sciences',
        'Sciences','Enginerring','Medicine', 'Agriculture',
        'Dentistry','Pharmacy','Associated Medical Sciences',
        'Nursing','Agro-Industry','Veterinary Medicine','Business Administration',
        'Economics','Architecture','Mass Communication','Political Science and Public Administration',
        'Law','College of Arts Meida and Technology','invalid','invalid','International college of digital innovation'

    ];
    let li = document.createElement('li');
    let text = document.createTextNode('falculty : ');
    if(parseInt(val) > 0 && parseInt(val) < 27){
        text.appendData(`${faculty[val-1]}`);
    }else{
        text.appendData(`Invalid faculty ID`);
    }
    li.appendChild(text);
    return li;
}

function checkDegreeType(val) {
    let li = document.createElement('li');
    let text = document.createTextNode('Your Degree : ');
    switch(val){
        case 1 :
            text.appendData('Bachelor');
            break;
        case 2 :
            text.appendData('diploma Bachelor');
            break;
        case 3 :
            text.appendData('Master');
            break;
        case 4 :
            text.appendData('diploma Master');
            break;
        case 5 :
            text.appendData('PhD');
            break;
        default :
            text.appendData('Invalid Degree Type');
    } 
    li.appendChild(text);
    return li;
}

function checkCourse(val) {
    let li = document.createElement('li');
    let text = document.createTextNode('Course Type : ');
    switch(val){
        case 1 :
            text.appendData('Normal Course');
            break;
        case 2 :
            text.appendData('Special Course');
            break;
        case 5 :
            text.appendData('International Course');
            break;
        default :
            text.appendData('Invalid Course Type');
    } 
    li.appendChild(text);
    return li;
}

function checkPersonalType(val) {
    let li = document.createElement('li');
    let text = document.createTextNode('Type of Student: ');
    switch(val){
        case 0 :
            text.appendData('Thai Student');
            break;
        case 5 :
            text.appendData('Foreign Student');
            break;
        case 8 :
            text.appendData('higher degree Foreign Student');
            break;
        case 9 :
            text.appendData('higher degree Thai Student');
            break;
        default :
            text.appendData('Invailid Personal Type');
    } 
    li.appendChild(text);
    return li;
}

function createNo(val){
    let li = document.createElement('li');
    let text = document.createTextNode(`Number : ${val}`);
    li.appendChild(text);
    return li;
}