import { Navigate, Route, Routes } from 'react-router-dom';
import { Catalog } from '@/pages/Catalog';
import { Home } from '@/pages/Home';
import { Reader } from '@/pages/Reader';

export default function App() {
  return <Routes><Route path="/" element={<Home />} /><Route path="/books" element={<Catalog kind="book" />} /><Route path="/comics" element={<Catalog kind="comic" />} /><Route path="/read/:type/:slug" element={<Reader />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes>;
}
