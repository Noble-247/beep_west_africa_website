/* TODO: ADD ALL PROPERTIES FOR EACH JOURNAL CATEGORY */

//Journal Category Image Imports
import CardiovascularImage from "../../image/journal_photos/cardiovascular.jpg";
import ComputerEngineeringImage from "../../image/journal_photos/computer_engineering.jpg";
import DentistryImage from "../../image/journal_photos/dentistry.jpg";
import LawImage from "../../image/journal_photos/law.jpg";
import MarineImage from "../../image/journal_photos/marine-1.jpg";
import NursingImage from "../../image/journal_photos/nursing.jpg";
import PharmacauticalImage from "../../image/journal_photos/pharmacautical.jpg";
import ScienceAndTechImage from "../../image/journal_photos/science_and_tech.jpg";
import VeterineryImage from "../../image/journal_photos/veterinery.jpg";

//imports to determine how many journals have been published
import africanJournalOfThoracicAndCardiovascularSurgery from "./AJOTACS/AJOTACS.js";
import internationalJournalOfEngineeringAndComputerInnovations from "./IJOEACI/IJOEACI";
import africanJournalOfOralHealthSciences from "./AJOOHS/AJOOHS";
import journalOfLawAndConflictResolution from "./JOLACR/JOLACR";
import internationalJournalOfOceanographyAndMaringScience from "./IJOOAMS/IJOOAMS";
import internationalJournalOfNursingAndMidwifery from "./IJONAM/IJ0NAM";
import africanJournalOfPharmacyAndPharmacology from "./AJOPAP/AJOPAP";
import internationJournalOfComputerEngineeringReaearch from "./IJOCER/IJOCER";
import journalOfVeterinaryMedicineAndAnimalHealth from "./JOVMAH/JOVMAH";

const JournalData = [
  {
    id: 1,
    title: "African Journal Of ",
    category: "THORACIC AND CARDIOVASCULAR SURGERY",
    code: "AJOTACS",
    image: CardiovascularImage,
    language: "English",
    ISSN: "1994-7461",
    startYear: "2005",
    numberOfArticulesPublished:
      africanJournalOfThoracicAndCardiovascularSurgery.length,
  },
  {
    id: 2,
    title: "International Journal Of ",
    category: "ENGINEERING AND COMPUTER INNOVATIONS",
    code: "IJOEACI",
    image: ComputerEngineeringImage,
    language: "English",
    ISSN: "2141-6508",
    startYear: "2010",
    numberOfArticulesPublished:
      internationalJournalOfEngineeringAndComputerInnovations.length,
  },
  {
    id: 3,
    title: "African Journal Of ",
    category: "ORAL HEALTH SCIENCES",
    code: "AJOOHS",
    image: DentistryImage,
    language: "English",
    ISSN: "1608-7232",
    startYear: "2016",
    numberOfArticlesPublished: africanJournalOfOralHealthSciences.length,
  },
  {
    id: 4,
    title: "Journal Of ",
    category: "LAW AND CONFLICT RESOLUTION",
    code: "JOLACR",
    image: LawImage,
    language: "English",
    ISSN: "2006-9804",
    startYear: "2009",
    numberOfArticlesPublished: journalOfLawAndConflictResolution.length,
  },
  {
    id: 5,
    title: "International Journal Of  ",
    category: "OCEANOGRAPHY AND MARINE SCIENCE",
    code: "IJOOAMS",
    image: MarineImage,
    language: "English",
    ISSN: "2141-2294",
    startYear: "2010",
    numberOfArticlesPublished:
      internationalJournalOfOceanographyAndMaringScience.length,
  },
  {
    id: 6,
    title: "International Journal Of ",
    category: "NURSING AND MIDWIFERY",
    code: "IJ0NAM",
    image: NursingImage,
    language: "English",
    ISSN: "2141-2456",
    startYear: "2009",
    numberOfArticlesPublished: internationalJournalOfNursingAndMidwifery.length,
  },
  {
    id: 7,
    title: "African Journal Of ",
    category: "PHARMACY AND PHARMACOLOGY",
    code: "AJOPAP",
    image: PharmacauticalImage,
    language: "English",
    ISSN: "1996-0816",
    startYear: "2007",
    numberOfArticlesPublished: africanJournalOfPharmacyAndPharmacology.length,
  },
  {
    id: 8,
    title: "International Journal Of ",
    category: "COMPUTER ENGINEERING RESEARCH",
    code: "IJOCER",
    image: ScienceAndTechImage,
    language: "English",
    ISSN: "2141-6494",
    startYear: "2010",
    numberOfArticlesPublished:
      internationJournalOfComputerEngineeringReaearch.length,
  },
  {
    id: 9,
    title: "Journal Of ",
    category: "VETERINARY MEDICINE AND ANIMAL HEALTH",
    code: "JOVMAH",
    image: VeterineryImage,
    language: "English",
    ISSN: "2141-2529",
    startYear: "2009",
    numberOfArticlesPublished:
      journalOfVeterinaryMedicineAndAnimalHealth.length,
  },
];

export default JournalData;

/* 

{
    id: 9,
    title: "",
    category: "",
    code: "",
    image: "",
     language: "English",
    ISSN: "",
    startYear: "",
    numberOfArticlesPublished: "",
  },

*/
