import React, { useEffect, useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  LoaderCircle,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialForm = {
  fullName: "",
  companyName: "",
  workEmail: "",
  phoneNumber: "",
  productCategory: "rubber-bush",
  specificProduct: "",
  estimatedQuantity: "",
  projectDescription: "",
  honeypot: "",
};

const categories = [
  ["rubber-bush", "Rubber Bush & Industrial Parts"],
  ["extruded-profiles", "Rubber Extruded Profiles"],
  ["custom-molded", "Custom Molded Components"],
  ["seal-o-ring-kits", "Seal & O-Ring Kits"],
  ["oil-packing-seals", "Oil & Packing Seals"],
  ["rubber-gaskets", "Industrial Rubber Gaskets"],
  ["bespoke-development", "New Die / Mould Development"],
];

const inputClass =
  "w-full min-w-0 rounded-xl border border-white/10 bg-[#111312] px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition duration-200 focus:border-[#F47735] focus:ring-1 focus:ring-[#F47735]";

export default function InquiryForm({
  prefilledProduct = "",
  prefilledCategory = "",
}) {
  const [formData, setFormData] = useState({
    ...initialForm,
    specificProduct: prefilledProduct,
    productCategory:
      prefilledCategory || initialForm.productCategory,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (prefilledProduct || prefilledCategory) {
      setFormData((prev) => ({
        ...prev,
        specificProduct: prefilledProduct || prev.specificProduct,
        productCategory: prefilledCategory || prev.productCategory,
      }));
    }
  }, [prefilledProduct, prefilledCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your name.";
    }

    if (!formData.companyName.trim()) {
      nextErrors.companyName = "Please enter your company name.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.workEmail.trim()
      )
    ) {
      nextErrors.workEmail = "Enter a valid email address.";
    }

    if (formData.phoneNumber.replace(/\D/g, "").length < 8) {
      nextErrors.phoneNumber = "Enter a valid phone number.";
    }

    if (!formData.estimatedQuantity.trim()) {
      nextErrors.estimatedQuantity =
        "Please enter the estimated quantity.";
    }

    if (!formData.projectDescription.trim()) {
      nextErrors.projectDescription =
        "Please describe your requirements.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hidden spam-trap field
    if (formData.honeypot) return;

    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    // Add your actual Web3Forms access key here
    const accessKey = "bca31688-25e8-4383-bfa1-e9ba9d45f771";

    const selectedCategory =
      categories.find(
        ([value]) => value === formData.productCategory
      )?.[1] || formData.productCategory;

    const subject = `Request for Quotation | ${selectedCategory} | ${formData.companyName.trim()}`;

    // Complete email including project requirements
    const message = [
      formData.projectDescription.trim(),
      "",
      `Submitted on: ${new Date().toLocaleString("en-IN")}`,
    ].join("\n");

    if (!accessKey.trim()) {
      setStatus("error");
      setErrorMessage(
        "Please add your Web3Forms access key in InquiryForm.jsx before submitting."
      );
      return;
    }

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject,
            from_name: "Upadhyay Rubber Industry Website",
            name: formData.fullName.trim(),
            email: formData.workEmail.trim(),
            replyto: formData.workEmail.trim(),
            company_name: formData.companyName.trim(),
            phone_number: formData.phoneNumber.trim(),
            product_category: selectedCategory,
            specific_product:
              formData.specificProduct.trim() || "Not specified",
            estimated_quantity: formData.estimatedQuantity.trim(),
            message,
            botcheck: "",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to send your inquiry right now."
        );
      }

      setStatus("success");
    } catch (error) {
      console.error("Web3Forms submission failed:", error);

      setStatus("error");
      setErrorMessage(
        error.message ||
          "Your inquiry could not be sent. Please try again in a moment."
      );
    }
  };

  const resetForm = () => {
    setFormData({
      ...initialForm,
      specificProduct: prefilledProduct,
      productCategory:
        prefilledCategory || initialForm.productCategory,
    });

    setErrors({});
    setStatus("idle");
    setErrorMessage("");
  };

  const FieldError = ({ name }) =>
    errors[name] ? (
      <p className="mt-1.5 text-xs text-red-400">
        {errors[name]}
      </p>
    ) : null;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#252826] p-5 shadow-2xl sm:p-8 lg:p-10">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F47735]/10 blur-3xl" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative py-12 text-center"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400">
              <CheckCircle size={32} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F47735]">
              Inquiry sent successfully
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Thank you, {formData.fullName}!
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/60">
              Your inquiry has been submitted successfully. The
              Upadhyay Rubber Industry team can now review your
              requirements and respond to you.
            </p>

            <p className="mt-5 break-all text-sm text-white/80">
              upadhyayrubber@gmail.com
            </p>

            <button
              type="button"
              onClick={resetForm}
              className="mt-8 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#F47735] hover:text-[#F47735]"
            >
              Send another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            noValidate
            className="relative space-y-6"
          >
            {/* Heading */}
            <div className="border-b border-white/10 pb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F47735] sm:text-sm">
                Industrial Enquiries
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Request a Quotation
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/55 sm:text-base">
                Tell us about your component requirements and our
                team can get back to you.
              </p>
            </div>

            {/* Hidden spam protection */}
            <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
              <label htmlFor="honeypot">
                Leave this field empty
              </label>

              <input
                id="honeypot"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>

            {/* Form fields */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              {/* Full name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-3 block text-sm text-white/80 sm:text-base"
                >
                  Full name *
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-invalid={!!errors.fullName}
                  className={inputClass}
                />

                <FieldError name="fullName" />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="companyName"
                  className="mb-3 block text-sm text-white/80 sm:text-base"
                >
                  Company name *
                </label>

                <input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your company"
                  autoComplete="organization"
                  aria-invalid={!!errors.companyName}
                  className={inputClass}
                />

                <FieldError name="companyName" />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="workEmail"
                  className="mb-3 block text-sm text-white/80 sm:text-base"
                >
                  Email address *
                </label>

                <input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                  aria-invalid={!!errors.workEmail}
                  className={inputClass}
                />

                <FieldError name="workEmail" />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="mb-3 block text-sm text-white/80 sm:text-base"
                >
                  Phone / WhatsApp *
                </label>

                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  aria-invalid={!!errors.phoneNumber}
                  className={inputClass}
                />

                <FieldError name="phoneNumber" />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="productCategory"
                  className="mb-3 block text-sm text-white/80 sm:text-base"
                >
                  Product category *
                </label>

                <select
                  id="productCategory"
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  {categories.map(([value, label]) => (
                    <option
                      key={value}
                      value={value}
                      className="bg-[#111312] text-white"
                    >
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label
                  htmlFor="estimatedQuantity"
                  className="mb-3 block text-sm text-white/80 sm:text-base"
                >
                  Estimated quantity *
                </label>

                <input
                  id="estimatedQuantity"
                  name="estimatedQuantity"
                  value={formData.estimatedQuantity}
                  onChange={handleChange}
                  placeholder="e.g. 5000 pieces/month"
                  aria-invalid={!!errors.estimatedQuantity}
                  className={inputClass}
                />

                <FieldError name="estimatedQuantity" />
              </div>
            </div>

            {/* Selected product */}
            {formData.specificProduct && (
              <div className="flex items-center justify-between gap-3 rounded-xl border border-[#F47735]/30 bg-[#F47735]/10 p-3 text-sm text-white">
                <span>
                  Product:{" "}
                  <strong>{formData.specificProduct}</strong>
                </span>

                <button
                  type="button"
                  aria-label="Clear selected product"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      specificProduct: "",
                    }))
                  }
                  className="text-white/60 transition hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            )}

            {/* Project requirements */}
            <div>
              <label
                htmlFor="projectDescription"
                className="mb-3 block text-sm text-white/80 sm:text-base"
              >
                Project requirements *
              </label>

              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={5}
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Describe your product, material, dimensions, application or other requirements..."
                aria-invalid={!!errors.projectDescription}
                className={`${inputClass} min-h-40 resize-y`}
              />

              <FieldError name="projectDescription" />
            </div>

            {/* Error message */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-3 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300"
                  role="alert"
                >
                  <AlertCircle
                    className="mt-0.5 shrink-0"
                    size={18}
                  />

                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#F47735] px-6 py-5 text-base font-bold text-white shadow-lg shadow-[#F47735]/15 transition duration-300 hover:bg-[#e96725] hover:shadow-[#F47735]/25 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <LoaderCircle
                    className="animate-spin"
                    size={20}
                  />
                  Sending inquiry...
                </>
              ) : (
                <>
                  Send Inquiry
                  <Send size={20} />
                </>
              )}
            </button>

            <p className="text-center text-xs leading-5 text-white/40">
              Your inquiry will be sent securely through Web3Forms.
              No files or attachments are collected.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}