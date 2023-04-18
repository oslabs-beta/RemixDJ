import react from 'react';
import { manifestObj } from '../../types';

export const ManifestContext = react.createContext<manifestObj | null>(null);
