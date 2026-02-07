import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";



export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters from URL
    const title = searchParams.get("title") || "elorm.tsx";
    const description =
      searchParams.get("description") || "super creative software engineer";
    const type = searchParams.get("type") || "default"; // default, blog, project, etc.

    // Define color schemes for different types
    const colorSchemes = {
      default: {
        bg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
        primary: "#22c55e",
        secondary: "#16a34a",
        text: "#166534",
      },
      blog: {
        bg: "linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)",
        primary: "#f97316",
        secondary: "#ea580c",
        text: "#9a3412",
      },
      project: {
        bg: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
        primary: "#3b82f6",
        secondary: "#2563eb",
        text: "#1e40af",
      },
      about: {
        bg: "linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)",
        primary: "#a855f7",
        secondary: "#9333ea",
        text: "#7c3aed",
      },
    };

    const colors =
      colorSchemes[type as keyof typeof colorSchemes] || colorSchemes.default;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: colors.bg,
            padding: "80px",
            fontFamily: "Inter",
          }}
        >
          {/* Brand Tag */}
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: "80px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: colors.primary,
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                transform: "rotate(-1deg)",
                fontSize: "28px",
                fontWeight: "700",
                border: `3px solid ${colors.secondary}`,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              elorm.tsx
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            {/* Title */}
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "800",
                lineHeight: "1.1",
                color: "#1f2937",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "32px",
                color: "#6b7280",
                lineHeight: "1.4",
                textAlign: "center",
                maxWidth: "700px",
              }}
            >
              {description}
            </p>

            {/* Decorative elements */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "40px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: colors.primary,
                }}
              />
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: colors.secondary,
                }}
              />
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: colors.text,
                }}
              />
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              right: "80px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                color: colors.text,
                fontWeight: "600",
              }}
            >
              elorm.xyz
            </div>
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: colors.primary,
              }}
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error("Error generating OG image:", e.message);
    return new Response("Failed to generate image", {
      status: 500,
    });
  }
}
