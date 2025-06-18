import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import MerchantCenter from './pages/MerchantCenter';
import CustomerCenter from './pages/CustomerCenter';
import AssetCenter from './pages/AssetCenter';
import RechargeRecord from './pages/RechargeRecord';
import OrderList from './pages/OrderList';
import FingerprintBlacklist from './pages/FingerprintBlacklist';
import FingerprintLimit from './pages/FingerprintLimit';
import OneClickBlacklist from './pages/OneClickBlacklist';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import ShopList from './pages/ShopList';
import AddShop from './pages/AddShop';
// 新增导入
import ImageUpload from './pages/ImageUpload';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        {/* <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} >
            <Route index element={<Navigate to="merchant-center" replace />} />
            <Route path="merchant-center" element={<MerchantCenter />} />
          </Route>
        </Routes> */}
      </Router>
    </AuthProvider>
  );
};

export default App;
