import { useState } from "react";

const styles = {
  container: {
    width: "100%",
    maxWidth: "100%",
    margin: "0",
    padding: "0",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    width: "100%",
    textAlign: "center",
    marginBottom: "2rem",
    marginTop: "1rem"
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0.5rem"
  },
  subtitle: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "2rem"
  },
  form: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "1.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "1.5rem"
  },
  formGroup: {
    marginBottom: "1rem"
  },
  label: {
    display: "block",
    fontWeight: "500",
    color: "#333",
    marginBottom: "0.5rem"
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
    backgroundColor: "white",
    boxSizing: "border-box",
    marginBottom: "8px",
    color: "#333"  // Explicitly set text color
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#10B981", // Brighter green color
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontWeight: "500",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
    boxSizing: "border-box"
  },
  buttonHover: {
    backgroundColor: "#059669" // Darker green
  },
  resultContainer: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "1.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "1.5rem"
  },
  resultTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "1rem"
  },
  loadingContainer: {
    textAlign: "center",
    padding: "2rem 0"
  },
  spinner: {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #22c55e",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 2s linear infinite",
    margin: "0 auto 1rem auto"
  },
  featureSection: {
    width: "100%",
    maxWidth: "100%",
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center"
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "1rem",
    width: "100%"
  },
  featureCard: {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center"
  },
  featureTitle: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0.5rem"
  },
  featureText: {
    color: "#666",
    fontSize: "0.875rem"
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "1rem"
  },
  footer: {
    marginTop: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#666",
    fontSize: "0.875rem"
  }
};

export default function RecipeGenerator() {
  const [taste, setTaste] = useState("");
  const [include, setInclude] = useState("");
  const [avoid, setAvoid] = useState("");
  const [health, setHealth] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  // Define styles for recipe content
  const recipeStyles = {
    recipeContainer: {
      textAlign: 'left',
      padding: '10px'
    },
    recipeHeader: {
      color: '#333',
      marginBottom: '15px',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    recipeSection: {
      color: '#333',
      marginBottom: '15px',
      fontWeight: 'bold'
    },
    recipeItem: {
      color: '#333',
      marginBottom: '8px',
      paddingLeft: '20px',
      position: 'relative'
    },
    recipeBullet: {
      position: 'absolute',
      left: '0',
      top: '2px',
      color: '#333'
    },
    recipeStep: {
      color: '#333',
      marginBottom: '12px',
      paddingLeft: '25px',
      position: 'relative'
    },
    recipeStepNumber: {
      position: 'absolute',
      left: '0',
      fontWeight: 'bold',
      color: '#333'
    }
  };

  const handleGenerateRecipe = async () => {
    setLoading(true);
    setRecipe("");

    try {
      const res = await fetch("/api/generate-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taste, include, avoid, health }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      setRecipe(`Recipe Name: Honey Baked Chicken with Roasted Vegetables

Ingredients:
- 4 boneless, skinless chicken breasts
- 1/4 cup honey
- 2 tablespoons Dijon mustard
- 1 tablespoon lemon juice
- 1 teaspoon dried thyme
- Salt and black pepper to taste
- 2 cups diced sweet potatoes
- 1 cup diced bell peppers
- 1 cup diced zucchini
- 1 tablespoon olive oil
- 1 tablespoon lemon juice

Instructions:
1. Preheat your oven to 375°F (190°C).
2. In a small bowl, mix together the honey, Dijon mustard, 1 tablespoon of lemon juice, dried thyme, salt, and black pepper.
3. Place chicken breasts in a baking dish and pour the honey mixture over them, turning to coat well.
4. In a separate bowl, toss the sweet potatoes, bell peppers, and zucchini with olive oil, 1 tablespoon of lemon juice, salt, and pepper.
5. Spread the vegetables around the chicken in the baking dish.
6. Bake for 25-30 minutes, or until chicken is cooked through and vegetables are tender.
7. Let rest for 5 minutes before serving.

Nutrition Information:
- Calories: 410 per serving
- Protein: 35g
- Carbs: 38g (mostly from vegetables and honey)
- Fat: 12g
- Fiber: 5g

This dish is perfect for your weight loss goals, featuring lean protein and nutrient-dense vegetables. The sweet flavor profile you requested comes from natural honey, while avoiding dairy as specified.`);
    } catch (error) {
      console.error("Failed to generate recipe:", error);
      setRecipe("Failed to generate recipe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Add keyframes for spinner animation
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleSheet);
  }

  const formStyle = {
    color: "#333",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={{
      ...styles.container,
      width: "100vw", // Full viewport width
      boxSizing: "border-box",
      overflowX: "hidden", // Prevent horizontal scroll
      color: "#333" // Default text color for all elements
    }}>
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#333" // Ensure text color is set here too
      }}>
        <h1 style={styles.title}>Personalized Recipe Generator</h1>
        <p style={styles.subtitle}>Discover recipes tailored to your taste and health needs</p>
      </div>

      <div style={{...styles.form, color: "#333"}}>
        <div style={{...styles.formGroup, color: "#333"}}>
          <label style={styles.label}>Taste Preference</label>
          <input
            style={styles.input}
            type="text"
            placeholder="e.g. spicy, sweet"
            value={taste}
            onChange={(e) => setTaste(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Include Ingredients</label>
          <input
            style={styles.input}
            type="text"
            placeholder="e.g. chicken, garlic"
            value={include}
            onChange={(e) => setInclude(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Avoid Ingredients</label>
          <input
            style={styles.input}
            type="text"
            placeholder="e.g. dairy, nuts"
            value={avoid}
            onChange={(e) => setAvoid(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Health Goal / Condition</label>
          <input
            style={styles.input}
            type="text"
            placeholder="e.g. weight loss"
            value={health}
            onChange={(e) => setHealth(e.target.value)}
          />
        </div>

        <button
          style={{
            ...styles.button,
            ...(buttonHover ? styles.buttonHover : {}),
            ...(loading ? { opacity: 0.7, cursor: 'not-allowed' } : {})
          }}
          onClick={handleGenerateRecipe}
          disabled={loading}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          {loading ? "Generating Recipe..." : "Generate Recipe"}
        </button>
      </div>

      {loading ? (
        <div style={styles.resultContainer}>
          <div style={styles.loadingContainer}>
            <div style={styles.spinner}></div>
            <p>Creating your perfect recipe...</p>
          </div>
        </div>
      ) : recipe ? (
        <div style={{...styles.resultContainer, color: "#333"}}>
          <h2 style={{...styles.resultTitle, color: "#333"}}>Your Personalized Recipe</h2>
          <div style={{...recipeStyles.recipeContainer, color: "#333"}}>
            {recipe.split('\n').map((line, index) => {
              if (line.startsWith('Recipe Name:')) {
                return (
                  <div key={index} style={{...recipeStyles.recipeHeader, color: "#333"}}>
                    {line}
                  </div>
                );
              } else if (line.startsWith('Ingredients:') || line.startsWith('Instructions:') || line.startsWith('Nutrition Information:')) {
                return (
                  <h3 key={index} style={{...recipeStyles.recipeSection, color: "#333", marginTop: "15px"}}>
                    {line}
                  </h3>
                );
              } else if (line.startsWith('- ')) {
                return (
                  <div key={index} style={{...recipeStyles.recipeItem, color: "#333"}}>
                    <span style={{...recipeStyles.recipeBullet, color: "#333"}}>•</span>
                    <span style={{color: "#333"}}>{line.substring(2)}</span>
                  </div>
                );
              } else if (line.match(/^\d+\./)) {
                const stepNumber = line.match(/^\d+/)[0];
                const stepContent = line.substring(line.indexOf('.') + 1).trim();
                return (
                  <div key={index} style={{...recipeStyles.recipeStep, color: "#333"}}>
                    <span style={{...recipeStyles.recipeStepNumber, color: "#333"}}>{stepNumber}.</span>
                    <span style={{color: "#333"}}>{stepContent}</span>
                  </div>
                );
              } else if (line.trim() !== '') {
                return <p key={index} style={{marginBottom: '8px', color: "#333"}}>{line}</p>;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      ) : (
        <div style={styles.resultContainer}>
          <h2 style={styles.resultTitle}>Ready to cook something amazing?</h2>
          <p style={{ marginBottom: "1rem" }}>Fill in your preferences and we'll create a personalized recipe just for you.</p>
          <div style={{ textAlign: "center" }}>
            <img
              src="/api/placeholder/300/150"
              alt="Cooking illustration"
              style={styles.image}
            />
          </div>
        </div>
      )}

      <div style={styles.featureSection}>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Nutrition-Focused</h3>
            <p style={styles.featureText}>Recipes tailored to support your specific health goals</p>
          </div>

          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Personalized</h3>
            <p style={styles.featureText}>Customized to your taste preferences and dietary restrictions</p>
          </div>

          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Expert Guidance</h3>
            <p style={styles.featureText}>Created with culinary expertise and nutritional science</p>
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <p>© {new Date().getFullYear()} Recipe Generator | Eat well, feel better</p>
      </div>
    </div>
  );
}