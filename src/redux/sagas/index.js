import { all, fork } from "redux-saga/effects";

import { onLoadPost } from "./postsagas";
import { onLoadUsers, onCreateUser } from "./usersagas";

export default function* rootSaga() {
  yield all([
    fork(onLoadPost),
    fork(onLoadUsers),
    fork(onCreateUser)
  ]);
  // yield all([...Object.values(userSagas)]);
}