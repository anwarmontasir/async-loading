import { NOTE_ADD, NOTE_REMOVE, NOTE_LOAD } from '../notes/reducers';

export const COMMENT_ADD = 'COMMENT_ADD';
export const COMMENT_REMOVE = 'COMMENT_REMOVE';

export function commentsByNote(state = {}, { type, payload }) {
  switch(type) {
    case NOTE_LOAD:
      return payload.reduce((map, note) => {
        map[note.id] = note.comments;
        return map;
      }, {});
    case NOTE_ADD:
      return {
        ...state,
        [payload.id]: []
      };
    case NOTE_REMOVE: {
      const nextState = { ...state };
      delete nextState[payload];
      return nextState;
    }
    case COMMENT_ADD: {
      const { noteId } = payload;
      const noteComments = state[noteId];

      return {
        ...state,
        [noteId]: [
          ...noteComments,
          payload.comment
        ]
      };
    }
    case COMMENT_REMOVE: {
      const { id, noteId } = payload;
      const noteComments = state[noteId];

      return {
        ...state,
        [noteId]: noteComments.filter(c => c.id !== id)
      };
    }
    default: 
      return state;
  }
}