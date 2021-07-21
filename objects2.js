//Objects with javascript - part 2.

const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
  };
  
  const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
  };
  
  const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
  };

  //1
  const newKey = (obj, key, value) => {
		obj[key] = value;
  };
	//2
	newKey(lesson2, 'turno', 'noite');
	console.log(lesson2)
	
	//3
	const objSize = (obj) => Object.keys(obj).length;
  console.log(objSize(lesson1));

  //4
  const objValue = (obj) => Object.values(obj);
  console.log(objValue(lesson1));
  //5
  console.log('-------------------------')
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  console.log(allLessons);
  //6
  const totalStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
      total += obj[array[index]].numeroEstudantes;
    }
    return total;
  };
  console.log(totalStudents(allLessons));
  //7
  console.log('-----------------------')
  const getValueNumber = (obj, number) => Object.values(obj)[number];
  console.log(getValueNumber(lesson1, 1));
  
  console.log('-----------------------------')
  //8
  const verifyEntries = (obj, key, value) => {
    const arr = Object.entries(obj);
    let pairValue = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) pairValue = true;
    };
    return pairValue;
  };
  console.log(verifyEntries(lesson1,'turno','manhã'));
  //bonus
  //1
  const getMathStudents = (obj) => {
    let total = 0;
    const arr = Object.keys(obj);
    for (index in arr) {
      if (obj[arr[index]].materia === 'matemática'){
        total += obj[arr[index]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(getMathStudents(allLessons));
  //2
  const info = (obj, name) => {
    const allLessons = [];
    let allStudents = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudents += array[index].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudents };
  }

  const teacherReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, info(allLessons, name));
    return report;
  }
  console.log(teacherReport(allLessons, 'Maria Clara'));