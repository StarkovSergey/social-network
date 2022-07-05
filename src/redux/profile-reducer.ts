import { ActionsTypes, ActionType, PostType, ProfilePageType } from './state';

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
  switch (action.type) {
    case ActionType.ADD_POST:
      const newPost: PostType = {
        id: new Date().getTime(),
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      break;
    case ActionType.UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      break;
    default:
      return state;
  }

  return state;
};

// это вспомогательная функция, а не часть бизнес-логику. Её можно не отправлять через пропсы, а просто импортировать
export const addPostActionCreator = () =>
  ({
    type: ActionType.ADD_POST,
  } as const);

export const updateNewPostTextActionCreator = (text: string) =>
  ({
    type: ActionType.UPDATE_NEW_POST_TEXT,
    text,
  } as const);
