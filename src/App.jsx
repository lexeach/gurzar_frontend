import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Loader from "./components/common/Loader";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

import MainLayout from "./layouts/MainLayout";


/* Authentication */

const Login = lazy(() => import("./pages/auth/Login"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const OTPVerification = lazy(() => import("./pages/auth/OTPVerification"));

/* Dashboard */

const SuperAdminDashboard = lazy(() =>
  import("./pages/dashboard/SuperAdminDashboard")
);

const StateDashboard = lazy(() =>
  import("./pages/dashboard/StateDashboard")
);

const DistrictDashboard = lazy(() =>
  import("./pages/dashboard/DistrictDashboard")
);

const TehsilDashboard = lazy(() =>
  import("./pages/dashboard/TehsilDashboard")
);

const VillageDashboard = lazy(() =>
  import("./pages/dashboard/VillageDashboard")
);

const MemberDashboard = lazy(() =>
  import("./pages/dashboard/MemberDashboard")
);

/* Member */

const MemberList = lazy(() =>
  import("./pages/member/MemberList")
);

const MemberRegistration = lazy(() =>
  import("./pages/member/MemberRegistration")
);



const MemberProfile = lazy(() =>
    import("./pages/member/profile/MemberProfile")
);

const MemberSearch = lazy(() =>
  import("./pages/member/MemberSearch")
);

const QRCard = lazy(() =>
  import("./pages/member/QRCard")
);

/* Hierarchy */

const State = lazy(() =>
  import("./pages/hierarchy/State")
);

const District = lazy(() =>
  import("./pages/hierarchy/District")
);

const Tehsil = lazy(() =>
  import("./pages/hierarchy/Tehsil")
);

const Village = lazy(() =>
  import("./pages/hierarchy/Village")
);

const Booth = lazy(() =>
  import("./pages/hierarchy/Booth")
);

/* Communication */

const SMS = lazy(() =>
  import("./pages/communication/SMS")
);

const WhatsApp = lazy(() =>
  import("./pages/communication/WhatsApp")
);

const Email = lazy(() =>
  import("./pages/communication/Email")
);

const PushNotification = lazy(() =>
  import("./pages/communication/PushNotification")
);

/* Reports */

const DashboardReports = lazy(() =>
  import("./pages/reports/DashboardReports")
);

const Charts = lazy(() =>
  import("./pages/reports/Charts")
);

const PDFExport = lazy(() =>
  import("./pages/reports/PDFExport")
);

const ExcelExport = lazy(() =>
  import("./pages/reports/ExcelExport")
);

/* Documents */

const Upload = lazy(() =>
  import("./pages/documents/Upload")
);

const Download = lazy(() =>
  import("./pages/documents/Download")
);

const Verification = lazy(() =>
  import("./pages/documents/Verification")
);

/* Settings */

const Roles = lazy(() =>
  import("./pages/settings/Roles")
);

const Permissions = lazy(() =>
  import("./pages/settings/Permissions")
);

const Masters = lazy(() =>
  import("./pages/settings/Masters")
);

const Configuration = lazy(() =>
  import("./pages/settings/Configuration")
);

/* Profile */

const Profile = lazy(() =>
  import("./pages/profile/Profile")
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>

      <Routes>

        {/* Public */}

        <Route element={<PublicRoute />}>

          <Route path="/login" element={<Login />} />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/otp-verification"
            element={<OTPVerification />}
          />

        </Route>

        {/* Protected */}

        <Route element={<ProtectedRoute />}>

          <Route element={<MainLayout />}>

            {/* Dashboard */}

            <Route
              path="/"
              element={<SuperAdminDashboard />}
            />

            <Route
              path="/dashboard/state"
              element={<StateDashboard />}
            />

            <Route
              path="/dashboard/district"
              element={<DistrictDashboard />}
            />

            <Route
              path="/dashboard/tehsil"
              element={<TehsilDashboard />}
            />

            <Route
              path="/dashboard/village"
              element={<VillageDashboard />}
            />

            <Route
              path="/dashboard/member"
              element={<MemberDashboard />}
            />

            {/* Member */}

            <Route
              path="/members"
              element={<MemberList />}
            />

            <Route
              path="/member/new"
              element={<MemberRegistration />}
            />

            <Route
              path="/member/profile/:id"
              element={<MemberProfile />}
            />

            <Route
              path="/member/search"
              element={<MemberSearch />}
            />

            <Route
              path="/member/qr-card/:id"
              element={<QRCard />}
            />

            {/* Hierarchy */}

            <Route path="/state" element={<State />} />
            <Route path="/district" element={<District />} />
            <Route path="/tehsil" element={<Tehsil />} />
            <Route path="/village" element={<Village />} />
            <Route path="/booth" element={<Booth />} />

            {/* Communication */}

            <Route path="/sms" element={<SMS />} />
            <Route path="/whatsapp" element={<WhatsApp />} />
            <Route path="/email" element={<Email />} />
            <Route
              path="/push-notification"
              element={<PushNotification />}
            />

            {/* Reports */}

            <Route
              path="/reports"
              element={<DashboardReports />}
            />

            <Route
              path="/charts"
              element={<Charts />}
            />

            <Route
              path="/pdf-export"
              element={<PDFExport />}
            />

            <Route
              path="/excel-export"
              element={<ExcelExport />}
            />

            {/* Documents */}

            <Route
              path="/documents/upload"
              element={<Upload />}
            />

            <Route
              path="/documents/download"
              element={<Download />}
            />

            <Route
              path="/documents/verification"
              element={<Verification />}
            />



            

            {/* Settings */}

            <Route path="/roles" element={<Roles />} />

            <Route
              path="/permissions"
              element={<Permissions />}
            />

            <Route
              path="/masters"
              element={<Masters />}
            />

            <Route
              path="/configuration"
              element={<Configuration />}
            />

            {/* Profile */}

            <Route
              path="/profile"
              element={<Profile />}
            />

          </Route>

        </Route>

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </Suspense>
  );
}