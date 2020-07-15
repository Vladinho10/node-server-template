/* eslint-disable */
(async () => {
    const response = await fetch('http://localhost:4000/v1/users?limit=100');
    const json = await response.json();
    let No = 0;
    const data = json.data.map(item=>({ no: No += 1, ...item }));

    console.log(data[0]);

    new gridjs.Grid({
        columns: [ 'no', 'name', 'age', 'gender'],
        data,
        sort: true,
        search: true,
        fixedHeader: true, // not working
        height: '400px',
        pagination: {
            enabled: true,
            limit: 39,
        },
        className: {
            td: 'my-custom-td-class',
            table: 'greenTable',
            tbody: 'tbody-v'
        }
    }).render(document.getElementById("wrapper"));
})()
    .catch(err => console.error({ err }));
