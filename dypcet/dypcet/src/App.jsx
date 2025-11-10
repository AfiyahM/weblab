import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Link,
  Container,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
// import ArchitectureIcon from "@mui/icons-material/Architecture";
// import ScienceIcon from "@mui/icons-material/Science";
import BiotechIcon from "@mui/icons-material/Biotech";
import theme from "./theme";
import dypLogo from "./dyp-logo.png";

// Facilities cards with emoji icons
//import { Card, Typography, Grid, Box } from "@mui/material";
import { School, LocalLibrary, Wifi, FitnessCenter, Restaurant, LocalHospital } from "@mui/icons-material"; 


// Official images
const campusImg =
  "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/t1538554792_OJmiiK8OlI-1.jpg";
const galleryImgs = [
  "https://coek.dypgroup.edu.in/wp-content/uploads/2020/03/DY_Patil_COllege_of_Engg-1024x683.jpg",
  "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Community-Services-Visits-scaled.jpeg",
  "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/6-1-1-scaled.jpg",
];

// Updated department info with actual links + icons
const departments = [
  {
    name: "Civil Engineering",
    icon: <SchoolIcon fontSize="large" color="primary" />,
    url: "https://coek.dypgroup.edu.in/department/civil-engineering/",
  },
  {
    name: "Computer Science & Engineering",
    icon: <ComputerIcon fontSize="large" color="secondary" />,
    url: "https://coek.dypgroup.edu.in/department/computer-science-engineering/",
  },
  {
    name: "Electronics & Telecommunication",
    icon: <ElectricalServicesIcon fontSize="large" color="primary" />,
    url: "https://coek.dypgroup.edu.in/department/electronics-telecommunication-engineering/",
  },
  {
    name: "Mechanical Engineering",
    icon: <PrecisionManufacturingIcon fontSize="large" color="secondary" />,
    url: "https://coek.dypgroup.edu.in/department/mechanical-engineering/",
  },
  // {
  //   name: "Architecture",
  //   icon: <ArchitectureIcon fontSize="large" color="primary" />,
  //   url: "https://coek.dypgroup.edu.in/department/architecture/",
  // },
  // {
  //   name: "General Engineering",
  //   icon: <ScienceIcon fontSize="large" color="secondary" />,
  //   url: "https://coek.dypgroup.edu.in/department/general-engineering/",
  // },
  {
    name: "Chemical Engineering",
    icon: <BiotechIcon fontSize="large" color="primary" />,
    url: "https://coek.dypgroup.edu.in/department/chemical-engineering/",
  },
];



const newsEvents = [
  {
    title: "TECHNOTSAV 2K25: Annual National Tech Fest",
    link: "https://coek.dypgroup.edu.in/events/technotsav-2k25/",
  },
  {
    title: "Force Motors: 4 Mechanical students selected!",
    link: "https://coek.dypgroup.edu.in/events/4-students-from-our-mechanical-department-have-been-selected-by-force-motors/",
    highlightColor: "error",
  },
  {
    title: "9 students at Tcognition internship (3.5 LPA)",
    link: "https://coek.dypgroup.edu.in/events/9-students-have-been-selected-at-tcognition-for-a-paid-full-time-internship-with-offer-package-of-3-5-lpa/",
    highlightColor: "success",
  },
  {
    title: "Success in Cultural Event",
    link: "https://coek.dypgroup.edu.in/events/success-in-cultural-event/",
    highlightColor: "warning",
  },
];



// Parallax overlay section for consistent parallax effect
const ParallaxOverlay = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${campusImg})`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "70vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.contrastText,
  textAlign: "center",
  padding: theme.spacing(6),
  "& .main-card": {
    maxWidth: 900,
    width: "90vw",
    backgroundColor: "rgba(255,255,255,0.96)",
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.shadows[10],
  },
}));

// Modern, branded navbar
function Navbar_() {
  return (
    <AppBar position="sticky" elevation={6} sx={{ zIndex: 1200 }}>
      <Toolbar sx={{ px: { xs: 2, md: 4 }, py: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Box component="img" src={dypLogo} alt="DYP Logo" sx={{ height: 46, mr: 2, borderRadius: "50%", boxShadow: 3 }} />
          <Typography variant="h6" noWrap sx={{ fontWeight: 700, color: "white" }}>
            D.Y. Patil College of Engineering & Technology, Kolhapur
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
          {["About", "Departments", "Facilities", "News", "Gallery", "Contact"].map(label => (
            <Button
              key={label}
              href={`#${label.toLowerCase()}`}
              color="inherit"
              sx={{
                fontWeight: 600,
                px: 2,
                borderRadius: 5,
                bgcolor: "rgba(255,255,255,0.1)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

// Hero section with parallax and CTA
function HeroSection_() {
  return (
    <ParallaxOverlay id="about">
      <Card className="main-card" elevation={6}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, color: "#003366" }}>
          Welcome to DYPCET Kolhapur
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mb: 3, color: "text.secondary" }}>
          Kasaba Bawada | Autonomous | Est. 1984<br />
          NAAC 'A' | AICTE Approved | Affiliated to Shivaji University
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          href="#contact"
          sx={{ px: 4, borderRadius: 2, fontWeight: 600, boxShadow: 4 }}
        >
          Apply Now
        </Button>
      </Card>
    </ParallaxOverlay>
  );
}



//import { Card, Typography, Grid, Box } from "@mui/material";

// Example facilities with icons
const facilities = [
  { name: "Library", icon: <LocalLibrary fontSize="large" color="primary" /> },
  { name: "Wi-Fi Enabled Campus", icon: <Wifi fontSize="large" color="primary" /> },
  { name: "Gymnasium", icon: <FitnessCenter fontSize="large" color="primary" /> },
  { name: "Cafeteria", icon: <Restaurant fontSize="large" color="primary" /> },
  { name: "Medical Center", icon: <LocalHospital fontSize="large" color="primary" /> },
  { name: "Classrooms", icon: <School fontSize="large" color="primary" /> },
];

function FacilitiesSection_() {
  return (
    <ParallaxOverlay id="facilities">
      <Card
        elevation={0}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          bgcolor: "background.default",
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: { xs: 4, md: 6 },
            color: "text.primary",
          }}
        >
          Campus Facilities
        </Typography>

        {/* Facilities Grid */}
        <Grid container spacing={4} justifyContent="center">
          {facilities.map((facility) => (
            <Grid item xs={12} sm={6} md={4} key={facility.name}>
              <Card
                elevation={2}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: 3,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    boxShadow: 6,
                  },
                }}
              >
                {/* Professional Icon */}
                <Box sx={{ mb: 2 }}>{facility.icon}</Box>

                {/* Facility Name */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  {facility.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </ParallaxOverlay>
  );
}


// News & events marquee
function NewsSection_() {
  return (
    <ParallaxOverlay id="news">
      <Card className="main-card" elevation={6}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}>
          News & Events
        </Typography>
        <Box
          sx={{
            mb: 4,
            backgroundColor: "primary.dark",
            borderRadius: 2,
            py: 1,
            px: 3,
            overflow: "hidden",
            display: "flex",
            animation: "scrollNews 20s linear infinite",
            "@keyframes scrollNews": {
              "0%": { transform: "translateX(100%)" },
              "100%": { transform: "translateX(-100%)" },
            },
          }}
        >
          <Stack direction="row" spacing={4} sx={{ whiteSpace: "nowrap" }}>
            {newsEvents.map((event, idx) => (
              <Link
                key={idx}
                href={event.link}
                target="_blank"
                rel="noopener"
                sx={{
                  color: "secondary.main",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  display: "inline-block",
                  "&:hover": { color: "secondary.light", textDecoration: "underline" },
                }}
              >
                {event.title}
              </Link>
            ))}
          </Stack>
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          href="https://coek.dypgroup.edu.in/about-dyp-group/news-events/"
          target="_blank"
          sx={{ fontWeight: 600, borderRadius: 2, px: 3 }}
        >
          View All News
        </Button>
      </Card>
    </ParallaxOverlay>
  );
}

// Gallery with grid of images
function GallerySection_() {
  return (
    <ParallaxOverlay id="gallery">
      <Card className="main-card" elevation={6}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}>
          Campus Gallery
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {galleryImgs.map((img, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  borderRadius: 2,
                  transition: "all 0.15s",
                  "&:hover": { transform: "scale(1.03)", boxShadow: 4 },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={img}
                  alt={`Campus view ${idx + 1}`}
                  sx={{ objectFit: "cover", width: "100%" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </ParallaxOverlay>
  );
}

// Contact section
function ContactSection_() {
  return (
    <ParallaxOverlay id="contact">
      <Card className="main-card" elevation={6}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          D. Y. Patil College of Engineering & Technology,<br />
          Kasaba Bawada, Kolhapur, Maharashtra 416006<br />
          Tel: 0231-2601431/32/33<br />
          Email: <Link href="mailto:info.dypcet@dypgroup.edu.in" color="secondary">
            info.dypcet@dypgroup.edu.in
          </Link>
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
          For job applications: <Link href="mailto:career.dypcet@dypgroup.edu.in" color="secondary">
            career.dypcet@dypgroup.edu.in
          </Link>
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 3 }}>
          <Button
            href="https://www.facebook.com/dypcetkolhapur"
            target="_blank"
            variant="outlined"
            color="secondary"
            sx={{ fontWeight: 600 }}
          >
            Facebook
          </Button>
          <Button
            href="https://instagram.com/dypcet_official"
            target="_blank"
            variant="outlined"
            color="secondary"
            sx={{ fontWeight: 600 }}
          >
            Instagram
          </Button>
          <Button
            href="https://www.youtube.com/channel/UC2y2iZBh2FJA-gmm_41UnMw/"
            target="_blank"
            variant="outlined"
            color="secondary"
            sx={{ fontWeight: 600 }}
          >
            YouTube
          </Button>
          <Button
            href="https://www.linkedin.com/in/dypatilkolhapur/"
            target="_blank"
            variant="outlined"
            color="secondary"
            sx={{ fontWeight: 600 }}
          >
            LinkedIn
          </Button>
        </Stack>
      </Card>
    </ParallaxOverlay>
  );
}
// About Section with Chips
function AboutSection_() {
  return (
    <ParallaxOverlay id="about">
      <Card className="main-card" elevation={6}>
        <Container sx={{ py: 6, textAlign: "center", maxWidth: 1200 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 600, color: "primary.main", mb: 4 }}
          >
            About Our College
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ mb: 4 }}
          >
            <Chip label="NAAC 'A' Grade" color="primary" />
            <Chip label="AICTE Approved" color="secondary" />
            <Chip label="Autonomous Institute" color="success" />
            <Chip label="Affiliated to Shivaji University" color="warning" />
          </Stack>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Card sx={{ p: 3, bgcolor: "#f5f7fa", borderRadius: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  40+
                </Typography>
                <Typography variant="subtitle1">
                  Years of Excellence
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ p: 3, bgcolor: "#f5f7fa", borderRadius: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  8+
                </Typography>
                <Typography variant="subtitle1">Branches of Study</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ p: 3, bgcolor: "#f5f7fa", borderRadius: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  2,500+
                </Typography>
                <Typography variant="subtitle1">
                  Students on Campus
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Card>
    </ParallaxOverlay>
  );
}

// Departments Section
function DepartmentsSection_() {
  return (
    <ParallaxOverlay id="departments">
      <Card className="main-card" elevation={6}>
        <Box sx={{ maxWidth: 1000, mx: "auto", py: 6 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: "primary.main",
              letterSpacing: 1,
            }}
          >
            Academic Departments
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {departments.map((dept) => (
              <Grid item key={dept.name} xs={12} sm={6} md={4}>
                <Link
                  href={dept.url}
                  target="_blank"
                  rel="noopener"
                  underline="none"
                >
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      boxShadow: 3,
                      textAlign: "center",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
                    }}
                  >
                    <Box sx={{ mb: 1 }}>{dept.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#003366" }}
                    >
                      {dept.name}
                    </Typography>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Card>
    </ParallaxOverlay>
  );
}

// FAQ Section with Accordion
function FAQSection_() {
  return (
    <ParallaxOverlay id="faq">
      <Card className="main-card" elevation={6}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}
        >
          Frequently Asked Questions
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Is DYPCET autonomous?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, DYPCET Kolhapur is an autonomous institute affiliated with
              Shivaji University and approved by AICTE.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Does the college provide hostel facilities?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, the campus has separate hostels for boys and girls, along
              with guest house facilities.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What extracurricular activities are offered?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The college organizes technical fests, cultural events, sports
              tournaments, NSS activities, and industry workshops throughout the
              year.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Card>
    </ParallaxOverlay>
  );
}


// Sticky, branded footer
function Footer_() {
  return (
    <Box
      sx={{
        py: 3,
        backgroundColor: "primary.dark",
        color: "primary.contrastText",
        textAlign: "center",
        boxShadow: 4,
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
        © 2025 D. Y. Patil College of Engineering & Technology, Kolhapur.
        <br />
        <Typography variant="caption">All rights reserved.</Typography>
      </Typography>
    </Box>
  );
}

// Main app composition
export default function App_() {
  return (
     <ThemeProvider theme={theme}>
     
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f5f7fa" }}>
      <Navbar_ />
      
      <HeroSection_ />
      <AboutSection_ />
      <DepartmentsSection_ />
      <FacilitiesSection_ />
      <NewsSection_ />
      <GallerySection_ />
      <ContactSection_ />
      <FAQSection_ />
      <Footer_ />
    </Box>
    </ThemeProvider>
  );
}
