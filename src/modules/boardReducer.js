// 타입을 지정 해주고 글 작성시 호출될 datasave 함수를 작성하였다. 글 작성 페이지에서 submit 버튼을 클릭하게 되면 datasave 함수에 dispatch 하여 저장된 데이터를 받아오고, export default 설정된 boardReducer 에서 action 으로 받아온 데이터를 전달 받을 수 있다.
// 중요한 점은 리듀서에서는 순수 함수만을 사용해야 함으로 state의 값을 직접 수정할 수 없다는 것이다. concat 함수로 배열을 추가 해주기 위해 initialData에서 대괄호 처리를 해주어야 중괄호로 묶이는 배열들을 계속 concat 처리할 수 있다. 아니면 에러가 발생될 것이다.

// 전달 받은 id로 select 할 data를 뽑는다.

const _SAVE = 'DATA_SAVE'
const _SELECT = 'DATA_SELECT'
const _EDIT = 'DATA_EDIT'
const _DELETE = 'DATA_DELETE'

export const dataSave = (inputData) => ({
    type: _SAVE,
    inputData: {
        id: inputData.id,
        title: inputData.title,
        content: inputData.content,
        user: inputData.user,
        url:inputData.url
    }
})

// Board.js에서 id 값을 매개변수로 받는다.
export const selectRow = (id) => ({
    type: _SELECT,
    inputData: {
        id: id,
    }
})

export const editContent = (inputData) => (
    console.log('reducer ', inputData),
    {
        type: _EDIT,
        inputData: {
            id: inputData.id,
            title: inputData.title,
            content: inputData.content,
            user: inputData.user,
            url: inputData.url,
        }
    })
//삭제할 id값 받아옴
export const removeContent = (id,image) => ({
    type: _DELETE,
    inputData: {
        id:id,
        image:image
    }
})

const initialState = {
    lastId: 0,
    inputData: [
        {
            id:'',
            title:'',
            content:'',
            user:'',
            url:''
        }
    ],
    // 선택된 데이터를 담아주려고 만들어줌
    
    selectRowData: {}
}

export default function boardReducer(state = initialState, action) {
    console.log('action: ', action)
    switch(action.type) {
        case _SAVE:
            console.log(state.inputData)
            return {
                lastId: state.lastId + 1,
                inputData: state.inputData.concat({
                    ...action.inputData, id: state.lastId +1,
                })
            }
            case _SELECT:
            return { // state에 action으로 전달받은 id값과 일치하는 데이터가 있다면 반환해줌.
                ...state, selectRowData: state.inputData.find(row => row.id === action.inputData.id), 
            }
            case _EDIT:
                return {
                    // state 에 저장되어 있는 inputData 중 동일한 id 값을 가진 데이터를 action.inputData 값으로 변경해준다.
                    ...state, inputData: state.inputData.map(row => row.id === action.inputData.id ? {...action.inputData} : row ),
                    // -------------->>>> {...action.inputData} -> 객체복사 ?    
                    selectRowData: {}
                   
                }
                case _DELETE:
                    return {
                        // lastId 값이 현재 삭제 요청된 id값과 동일하면 값을 줄여준다.
                        lastId: state.lastId === action.inputData.id ? state.lastId - 1 : state.lastId,
                        // filter를 사용하여 state에 있는 값과 action.id 값이 동일하지 않은 값만 return 하여 state 에 저장해준다.
                        inputData: state.inputData.filter(row =>
                            row.id !== action.inputData.id
                        ),
                        selectRowData: {}
                    }
            default:
                return state
        }
    }