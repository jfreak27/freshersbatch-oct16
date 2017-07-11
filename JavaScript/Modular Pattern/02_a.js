

function Employee(_empId, _ename, _esal, _edept) {


			this.empId = _empId;
			this.ename = _ename;
			this.esal = _esal;
			this.edept = _edept; 
}



var EmployeeList = function() {

	var Employees = [];
	return {

			addEmp : function (Employee) {

				Employees.push(Employee);
			}, 

			getEmp : function (){

				return Employees;
			}, 

			sort : function(){

					Employees.sort(function(a,b){return a.empId - b.empId});

			}

	}

}();


function main()
{

		var Emp1 = new Employee(15,"xor1",5000,3);
		console.log(Emp1);
		EmployeeList.addEmp(Emp1);

		var Emp2 = new Employee(5,"xor2",1000,1);
		console.log(Emp2);
		EmployeeList.addEmp(Emp2);


		EmployeeList.sort();
		
		console.log(EmployeeList.getEmp());


}