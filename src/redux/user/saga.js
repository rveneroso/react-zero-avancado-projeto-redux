import { all, takeEvery } from 'redux-saga/effects';

function* fetchUsers() {
    console.log("Chamou fetchUsers dentro do Saga");
}

export default all([
    takeEvery("user/fetchUsers", fetchUsers)
])