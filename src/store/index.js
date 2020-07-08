import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga' //导入redux-saga
import reducer from './reducer'
import mySaga from './sagas'  // 导入saga文件 

const sagaMiddleware = createSagaMiddleware() //实例化saga

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware) //添加saga为redux的中间件
);

const store  = createStore(reducer, enhancer)
sagaMiddleware.run(mySaga) // 执行saga文件

export default store
