import React from 'react'
// import ReactDOM from 'react-dom'
// ????^^^^^
import MaterialTable from 'material-table'

export default function Table() {
    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable
                columns={[
                    { title: 'name', field: 'name' }
                    ,
                    { title: 'last name', field: 'surname' },
                    { title: 'employee ID', field: 'employeeID', type: 'numeric' }
                    ,
                    { title: 'salary', field: 'salary', type: 'numeric' }
                    ,
                    { title: 'location', field: 'location' }
                    ,
                    {
                        title: 'job title', field: 'jobTitle',
                        lookup: { 1: 'CEO', 2: 'VP W', 3: 'VP X', 4: 'VP Y', 5: 'Implementation Manager', 6: 'Marketing Associate', 7: 'Intern' }
                    }
                ]}
                data={[
                    { name: 'Cosmos', surname: 'Kiefer', employeeID: 11000, salary: 1550000, location: 'Austin' },
                    { name: 'Adam', surname: 'Kiefer', employeeID: 11011, salary: 550000, location: 'Austin' },
                    { name: 'Cosmos', surname: 'Kiefer', employeeID: 11888, salary: 500000, location: 'Austin' }
                ]}
                title="Demo Title"
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const data = this.state.data;
                                    data.push(newData);
                                    this.setState({ data }, () => resolve());
                                }
                                resolve();
                            }, 1000);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const data = this.state.data;
                                    const index = data.indexOf(oldData);
                                    data[index] = newData;
                                    this.setState({ data }, () => resolve());
                                }
                                resolve();
                            }, 1000);
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    let data = this.state.data;
                                    const index = data.indexOf(oldData);
                                    data.splice(index, 1);
                                    this.setState({ data }, () => resolve());
                                }
                                resolve();
                            }, 1000);
                        })
                }}

            />
        </div>
    )
};






// ReactDOM.render(<App />, document.getElementById('react-div'));


