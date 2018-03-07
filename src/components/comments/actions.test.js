import { addComment, removeComment } from './actions';
import { COMMENT_ADD, COMMENT_REMOVE } from './reducers';

it('adds comment', () => {
  const noteId = 123;
  const text = 'test comment';
  const { type, payload } = addComment(noteId, { text });
  expect(type).toBe(COMMENT_ADD);
  expect(payload.id).toBeTruthy();
  expect(payload.noteId).toBe(noteId);
  expect(payload.text).toBe(text);
});

it('removes comment', () => {
  const id = 123;
  const noteId = 456;
  const action = removeComment(id, noteId);
  expect(action).toEqual({
    type: COMMENT_REMOVE,
    payload: { noteId, id }
  });
});