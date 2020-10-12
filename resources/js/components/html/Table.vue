<template>
    <div>
        <h1>{{msg}}</h1>
        <table>
            <caption>He-Man and Skeletor facts</caption>
            <tr>
                <td> </td>
                <th scope="col" class="heman">He-Man</th>
                <th scope="col" class="skeletor">Skeletor</th>
            </tr>
            <tr>
                <th scope="row">Role</th>
                <td>Hero</td>
                <td>Villain</td>
            </tr>
            <tr>
                <th scope="row">Weapon</th>
                <td>Power Sword</td>
                <td>Havoc Staff</td>
            </tr>
            <tr>
                <th scope="row">Dark secret</th>
                <td>Expert florist</td>
                <td>Cries at romcoms</td>
            </tr>
        </table>

        <h1>テーブル2</h1>
        <table>
        <caption>Example Caption</caption>
        <tr>
            <th>Login</th>
            <th>Email</th>
        </tr>
        <tr>
            <td>user1</td>
            <td>user1@sample.com</td>
        </tr>
        <tr>
            <td>user2</td>
            <td>user2@sample.com</td>
        </tr>
        </table>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: 'テーブル1'
            }
        },
    }
</script>

<style scoped>
caption {
    padding: 10px;
    caption-side: bottom;
}

table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: .8rem;
}

td,
th {
    border: 1px solid rgb(190, 190, 190);
    padding: 7px 5px;
}

th {
    background-color: rgb(235, 235, 235);
}

td {
    text-align: center;
}

tr:nth-child(even) td {
    background-color: rgb(250, 250, 250);
}

tr:nth-child(odd) td {
    background-color: rgb(240, 240, 240);
}

.heman {
    font: 1.4rem molot;
    text-shadow: 1px 1px 1px #fff, 2px 2px 1px #000;
}

.skeletor {
    font: 1.7rem rapscallion;
    letter-spacing: 3px;
    text-shadow: 1px 1px 0 #fff, 0 0 9px #000;
}

</style>
