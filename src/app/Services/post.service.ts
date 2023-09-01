export class EmployeeDetails{
    newEmployeeDetails : Array<any> = [
        {
            name:"thanmai",
            dept:'Fullstack',
            guide:'Faisal'
        },
        {
            name:"sakshitha",
            dept:'IOT',
            guide:'Aaryan'
        },
        {
            name:"xyz",
            dept:'customer support',
            guide:'Prakash'
        },
        
    ]

    addEmployee(obj:any){
        this.newEmployeeDetails.push({
            name:obj.name,
            guide:obj.guide,
            dept:obj.dept,
            date:obj.doj,
        })
    }
}