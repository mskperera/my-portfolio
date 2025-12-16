const projects = [
{
  slug: "cloud-pos-inventory",
  title: "Multi Tenancy Cloud POS System",
  short: "Multi-tenant cloud POS with billing and inventory management (click “More Details” to experience the demo).",
  description: "Designed and developed a cloud-based Point of Sale system using a multi-tenancy architecture (single frontend and backend application with separate databases for each client). The system supports POS billing, receipt printing, product management, stock and batch handling, store management, and reporting. It can be used from both web and desktop applications. Ideal for businesses needing a centralized, scalable, and efficient way to manage operations from anywhere. (Live demo available: https://clpos.legendbyte.com  | username: demo1@gmail.com, password:1234)",
  features: [
    "Multi-tenant architecture with separate databases per client",
    "POS billing and receipt printing",
    "Product, stock, and batch management",
    "Store and user management with role-based access",
    "Detailed reporting and analytics",
    "Web and desktop application support"
  ],
  liveUrl: "https://clpos.legendbyte.com",
  sourceUrl: null,
  thumbnail: "https://clpos.legendbyte.com/api/v1/asset/2e08ec6079dc35224a9a70af20869638",
  screenshots: [
    { url: "https://clpos.legendbyte.com/api/v1/asset/2e08ec6079dc35224a9a70af20869638", caption: "POS view" },
    { url: "https://clpos.legendbyte.com/api/v1/asset/2b8edb53755ad4ca855d35a3647e9260", caption: "Dashboard Overview" },
    { url: "https://clpos.legendbyte.com/api/v1/asset/5ca9e35323c34efbc37a16f7d229101f", caption: "Inventory Management" },
    { url: "https://clpos.legendbyte.com/api/v1/asset/e3ed12a9b837b89a9ce62b87ddca507a", caption: "Add/Edit Product Details" },
    // { url: "https://clpos.legendbyte.com/api/v1/asset/0ee1ab3084bd567164cf16cb4415e955", caption: "Desktop App Icon" }
  ],
  tech: ["React.js", "Node.js", "Express", "Tailwind CSS", "MariaDB", "Tauri", "Socket.io"]
}
,

{
  slug: "patient-management-system",
  title: "Patient Management System",
  short: "Patient Management System – A system to manage patient details, appointments, and clinic operations.",
  description: "Developed a complete solution to manage patient information, including personal details, medical history, file uploads, and audio recordings. Implemented dynamic printable reports using React components for clean, professional output.",
  features: [
    "Manage patient personal details and medical history",
    "Appointment scheduling and management",
    "File and audio recording uploads",
    "Printable reports built with React components",
    "Role-based access control",
    "Multi-user support for clinics",
    "Search and filter patients easily"
  ],
  liveUrl: null,
  sourceUrl: null,
  thumbnail: "https://clpos.legendbyte.com/api/v1/asset/d30cfe107d7027e3b450666e1f193920",
  screenshots: [
    { url: "https://clpos.legendbyte.com/api/v1/asset/d30cfe107d7027e3b450666e1f193920", caption: "Login" },
    { url: "https://clpos.legendbyte.com/api/v1/asset/1ca4f61e4ee52ae99b6d26d4721ad599", caption: "Easy search" },
    { url: "https://clpos.legendbyte.com/api/v1/asset/032e7c573d447ac8fbd4fbce7336159f", caption: "Patient records handling" },
    { url: "https://clpos.legendbyte.com/api/v1/asset/17020fded2f0b0507a261ac76559e652", caption: "New Patient" },
    { url: "https://clpos.legendbyte.com/api/v1/asset/a41c2514b6e49885c09401a3ff52dc40", caption: "Manage Appointments" }
  ],
  tech: ["React.js", "Node.js", "Express", "Tailwind CSS", "MariaDB"]
}
,

{
  slug: "iot-energy-metering",
  title: "IoT-Based Energy Metering System",
  short: "Developed an IoT energy metering system to track consumption and costs in real-time, displaying data on a web dashboard for easy monitoring.",
  description: "Built an IoT-based energy metering system to monitor electricity usage and calculate costs based on tariffs. The system collects data from energy meters and displays real-time consumption on a web dashboard. It uses two microservices: one for storing device data and another for handling system logic. Technologies used include React.js for the frontend, Node.js for the backend, MSSQL and MongoDB for data storage, MQTT for device communication, and Socket.io for real-time updates.",
  features: [
    "Real-time live electrical parameters (Voltage, Current, Frequency, Power Factor, kW, kVA)",
    "Today’s hourly consumption line chart with peak detection",
    "30-day historical consumption trend with bar/line visualization",
    "KPI header cards showing daily/monthly totals and efficiency",
    "Smooth real-time updates every 3 seconds with realistic simulation",
    "Fully responsive layout – perfect on tablets and large monitoring screens",
    "Dynamic tariff calculation engine",
    "SMS and Email alerts for high usage",
  ],
  liveUrl: null,
  sourceUrl: null,
  thumbnail: "https://clpos.legendbyte.com/api/v1/asset/66430354d09ba332a4e2c9cedd67c697",
  screenshots: [
    { url: "https://clpos.legendbyte.com/api/v1/asset/66430354d09ba332a4e2c9cedd67c697", caption: "Real-time Dashboard" },
  ],
  tech: [
    "Node.js",
    "React.js",
    "MSSQL",
    "MongoDB",
    "MQTT",
    "Socket.io",
    "Docker"
  ]
}
,
{
  slug: "automobile-management-system",
  title: "Automobile Management System",
  short: "Desktop software for managing automobile business operations including stock, billing, and service history.",
  description: "This desktop application helps automobile businesses such as car dealerships, service centers, and garages manage daily operations efficiently. It includes stock management, billing, vehicle service history tracking (including lube services), and dynamic report generation. Built with C#.NET using WPF for the desktop interface and MSSQL for the database.",
  features: [
    "Manage vehicle inventory and stock",
    "Billing and invoice generation",
    "Track vehicle lube service history, including lube services",
    "Generate printable reports",
    "Search and filter vehicles, customers, and services"
  ],
  liveUrl: null,
  sourceUrl: null,
  thumbnail: "https://clpos.legendbyte.com/api/v1/asset/494d4adf995fd0d8c64c7878fac60ee2",
  screenshots: [
        { url: "https://clpos.legendbyte.com/api/v1/asset/d388038982651b39c2ee7d7b92b0d204", caption: "POS View" },
    { url: "https://clpos.legendbyte.com/api/v1/asset/494d4adf995fd0d8c64c7878fac60ee2", caption: "Main Page" },
{ url: "https://clpos.legendbyte.com/api/v1/asset/46d304c88a6de46962f64aa523f1001d", caption: "Products/Items Management" },
    
    { url: "https://clpos.legendbyte.com/api/v1/asset/a5e4b0d5d95575b28a1a68026d4faf68", caption: "Stock Management" },
      { url: "https://clpos.legendbyte.com/api/v1/asset/a5e4b0d5d95575b28a1a68026d4faf68", caption: "GRN" },
    
    { url: "https://clpos.legendbyte.com/api/v1/asset/d1792d3dc30b88da7da564c63b4ed9bd", caption: "Billing and Invoices" },
    { url: "https://clpos.legendbyte.com/api/v1/asset/f822124d0dec01debe3974c7ab771a65", caption: "Vehicle Lube Service History" }
  ],
  tech: ["C#.NET", "WPF", "MSSQL", "SQLite"]
},
{
  slug: "geotrack-attendance",
  title: "Geo Attendance Tracker",
  short: "A mobile app for location-based employee attendance with live GPS tracking, clock-in/out, break management, and full activity history.",
  description: "This mobile attendance system tracks employee check-ins, check-outs, breaks, and real-time location using GPS. Employees can clock in/out with a single tap, manage breaks, and view their full attendance history by date. The API is ready for integration with HR systems or client services.",
  
  features: [
    "GPS location tracking with OpenStreetMap",
    "Manage attendance| Clock In, Start/End Break, and Clock Out with a secure drag-to-confirm slider.",
    "Daily activity history"
  ],

  liveUrl: "", // replace with your live PWA link
  sourceUrl: "", // replace with your repo

  thumbnail: "https://clpos.legendbyte.com/api/v1/asset/d53bbc03f6ca0a70bc54fb08faf2d938",

  screenshots: [
    {
      url: "https://clpos.legendbyte.com/api/v1/asset/d53bbc03f6ca0a70bc54fb08faf2d938",
      caption: "Home Screen – Live Map & Manage attendance"
    },
    {
      url: "https://clpos.legendbyte.com/api/v1/asset/03d4d13d088e3f68f2784081e0f65be3",
      caption: "Your Activity – History View"
    },

  ],

  tech: [
    "React Native",
    "Node.js",
    "MariaDB",
    "Leaflet.js (OpenStreetMap)"
  ],

  category: ["Mobile App", "React Native", "IoT", "HR Tech", "Location Tracking"],
  year: 2025,
  featured: true
}

  // Add more projects easily here
];