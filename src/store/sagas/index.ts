import {takeEvery, put, call, fork} from 'redux-saga/effects';

async function swapiGet(pattern) {
    const request = await fetch(`https://swapi.dev/api/${pattern}`);

    const data = await request.json();

    return data;
}

export function* loadPeople() {
    const people = yield call(swapiGet, 'people');

    yield put({type: 'SET_PEOPLE', payload: people.results});
}

export function* loadPlanets() {
    const planets = yield call(swapiGet, 'planets');
    yield put({type: 'SET_PLANETS', payload: planets.results});
}


// бизнес логика приложения / асинхронные дейтвия
export function* workerSaga() {
    yield fork(loadPeople);
    yield fork(loadPlanets);
}

// вочер - экшены происходящие в приложении
export function* watchLoadData() {
    yield takeEvery('LOAD_DATA', workerSaga);
}

export default function* rootSaga () {
    yield fork(watchLoadData);
}
