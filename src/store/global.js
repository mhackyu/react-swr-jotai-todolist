import { atom } from 'jotai';

const isSubmittingAtom = atom(false);
const isSubmitErrorAtom = atom(false);

export { isSubmittingAtom, isSubmitErrorAtom };
