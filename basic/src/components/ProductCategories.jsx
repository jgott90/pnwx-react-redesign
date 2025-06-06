import {
  FaXRay, FaUserShield, FaFlask, FaTools, FaBoxOpen, FaFilm
} from "react-icons/fa";
import { MdSettingsInputHdmi } from "react-icons/md";

const categories = [
  {
    icon: <FaXRay aria-hidden="true" focusable="false" />,
    name: "X-Ray Equipment",
    description: "X-ray machines, tables, grids, and core imaging equipment."
  },
  {
    icon: <FaBoxOpen aria-hidden="true" focusable="false" />,
    name: "Equipment Accessories",
    description: "Table pads, merchant boards, immobilizers, and more."
  },
  {
    icon: <FaUserShield aria-hidden="true" focusable="false" />,
    name: "Protective Gear",
    description: "Aprons, lead apparel, gloves, curtains, and barriers."
  },
  {
    icon: <FaFilm aria-hidden="true" focusable="false" />,
    name: "Film & Accessories",
    description: "X-ray film, cassettes, and silver recovery systems."
  },
  {
    icon: <MdSettingsInputHdmi aria-hidden="true" focusable="false" />,
    name: "Digital Imaging",
    description: "Digital x-ray, DR/CR systems, digital accessories."
  },
  {
    icon: <FaFlask aria-hidden="true" focusable="false" />,
    name: "Test & QA Tools",
    description: "Phantoms, test meters, resolution tools, quality assurance."
  }
];

export default function ProductCategories() {
  return (
    <section
      className="categories-section"
      id="products"
      aria-label="Product categories"
    >
      <h2 className="visually-hidden">Product Categories</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.name}>
            <span className="category-icon">{cat.icon}</span>
            <span className="category-label">{cat.name}</span>
            <span className="category-desc">{cat.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}