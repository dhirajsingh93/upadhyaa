import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, Upload, Paperclip, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InquiryForm({
  prefilledProduct = "",
  prefilledCategory = "",
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    productCategory: prefilledCategory || "rubber-bush",
    specificProduct: prefilledProduct || "",
    estimatedQuantity: "",
    projectDescription: "",
    honeypot: "", // Bot prevention field
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        specificProduct: prefilledProduct,
        productCategory: prefilledCategory || prev.productCategory,
      }));
    }
  }, [prefilledProduct, prefilledCategory]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company or entity name is required";
    
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Enter a valid email address (e.g. name@company.com)";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone / WhatsApp number is required";
    } else if (formData.phoneNumber.replace(/\D/g, '').length < 8) {
      newErrors.phoneNumber = "Enter a valid phone number (at least 8-10 digits)";
    }

    if (!formData.estimatedQuantity.trim()) {
      newErrors.estimatedQuantity = "Estimated batch / monthly quantity is required";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Please provide drawing details, polymer specs, or working conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Limit to 15MB
      if (file.size > 15 * 1024 * 1024) {
        alert("File size exceeds 15MB limit. Please upload a smaller CAD or PDF document.");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot spam trap check
    if (formData.honeypot) {
      console.warn("Spam submission blocked");
      return;
    }

    if (!validate()) return;

    setStatus("submitting");

    // Simulating robust client-side submission with RFQ tracking code
    // Ready for EmailJS or backend API integration
    setTimeout(() => {
      const generatedId = `URI-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedId);
      setStatus("success");
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      companyName: "",
      workEmail: "",
      phoneNumber: "",
      productCategory: "rubber-bush",
      specificProduct: "",
      estimatedQuantity: "",
      projectDescription: "",
      honeypot: "",
    });
    setSelectedFile(null);
    setErrors({});
    setStatus("idle");
  };

  return (
    <div className="bg-graphite border border-graphite-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12 px-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-industrial-orange px-3 py-1 rounded bg-charcoal border border-graphite-border">
              RFQ Logged Successfully
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-warm-white mt-4">
              Thank You, {formData.fullName}!
            </h3>

            <p className="mt-3 text-sm text-muted-gray max-w-lg mx-auto leading-relaxed">
              Your technical requirement has been registered. Reference ID: <strong className="text-warm-white font-mono">{referenceId}</strong>.
              Our technical desk at the Faridabad plant will review your specifications and contact you within 24 business hours.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-charcoal border border-graphite-border max-w-md mx-auto text-left text-xs font-mono space-y-1">
              <div className="text-muted-gray">Target Item: <span className="text-warm-white">{formData.specificProduct || formData.productCategory}</span></div>
              <div className="text-muted-gray">Target Volume: <span className="text-warm-white">{formData.estimatedQuantity}</span></div>
              <div className="text-muted-gray">Contact Channel: <span className="text-warm-white">{formData.phoneNumber} / {formData.workEmail}</span></div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/918810422099?text=Hello%20Upadhyay%20Rubber%2C%20I%20just%20submitted%20RFQ%20reference%20${referenceId}%20for%20${encodeURIComponent(formData.specificProduct || formData.productCategory)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#25D366]/25"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 32 32">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.68.755 5.185 2.067 7.324L2 30l6.884-2.034A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6c-2.316 0-4.48-.65-6.326-1.78l-.454-.28-4.686 1.384 1.402-4.568-.3-.474A11.536 11.536 0 014.4 16c0-6.408 5.192-11.6 11.6-11.6s11.6 5.192 11.6 11.6-5.192 11.6-11.6 11.6zm6.368-8.694c-.348-.174-2.062-1.018-2.38-1.134-.32-.116-.552-.174-.784.174s-.9 1.134-1.104 1.366-.406.262-.754.088a9.493 9.493 0 01-2.8-1.726 10.472 10.472 0 01-1.938-2.414c-.204-.348-.022-.536.152-.71.156-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.086-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.6-.204-.01-.436-.014-.668-.014s-.61.088-.93.436c-.32.348-1.22 1.192-1.22 2.91 0 1.716 1.25 3.372 1.424 3.604.174.232 2.458 3.754 5.956 5.264.832.36 1.482.574 1.988.736.836.266 1.596.228 2.198.138.67-.1 2.062-.844 2.352-1.658.29-.814.29-1.512.204-1.658-.088-.146-.32-.232-.668-.406z"/>
                </svg>
                <span>Instant Update via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-charcoal hover:bg-graphite-light text-warm-white border border-graphite-border text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Submit Another Requirement
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Form Header */}
            <div className="border-b border-graphite-border pb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-industrial-orange">
                Industrial RFQ & Custom Moulding
              </span>
              <h3 className="font-display text-2xl font-bold text-warm-white mt-1">
                Request a Formal Quotation
              </h3>
              <p className="text-xs sm:text-sm text-muted-gray mt-1">
                Share your 2D/3D drawing, polymer requirements, or physical sample specs for direct factory pricing.
              </p>
            </div>

            {/* Honeypot Spam Prevention (Hidden from real users) */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Field Row 1: Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-warm-white mb-2">
                  Contact Person Name <span className="text-industrial-orange">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh Sharma"
                  className={`w-full px-4 py-3 rounded-xl bg-charcoal border text-sm text-warm-white placeholder:text-muted-gray/50 focus:outline-none transition-all ${
                    errors.fullName ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-graphite-border focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange"
                  }`}
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="companyName" className="block text-xs font-mono uppercase tracking-wider text-warm-white mb-2">
                  Company / Entity Name <span className="text-industrial-orange">*</span>
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Apex Engineering Ltd."
                  className={`w-full px-4 py-3 rounded-xl bg-charcoal border text-sm text-warm-white placeholder:text-muted-gray/50 focus:outline-none transition-all ${
                    errors.companyName ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-graphite-border focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange"
                  }`}
                />
                {errors.companyName && <p className="mt-1 text-xs text-red-400">{errors.companyName}</p>}
              </div>
            </div>

            {/* Field Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="workEmail" className="block text-xs font-mono uppercase tracking-wider text-warm-white mb-2">
                  Work Email <span className="text-industrial-orange">*</span>
                </label>
                <input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="e.g. procurement@apex.com"
                  className={`w-full px-4 py-3 rounded-xl bg-charcoal border text-sm text-warm-white placeholder:text-muted-gray/50 focus:outline-none transition-all ${
                    errors.workEmail ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-graphite-border focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange"
                  }`}
                />
                {errors.workEmail && <p className="mt-1 text-xs text-red-400">{errors.workEmail}</p>}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-xs font-mono uppercase tracking-wider text-warm-white mb-2">
                  Phone / WhatsApp <span className="text-industrial-orange">*</span>
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl bg-charcoal border text-sm text-warm-white placeholder:text-muted-gray/50 focus:outline-none transition-all ${
                    errors.phoneNumber ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-graphite-border focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange"
                  }`}
                />
                {errors.phoneNumber && <p className="mt-1 text-xs text-red-400">{errors.phoneNumber}</p>}
              </div>
            </div>

            {/* Field Row 3: Product Category & Selected Item */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="productCategory" className="block text-xs font-mono uppercase tracking-wider text-warm-white mb-2">
                  Product Category <span className="text-industrial-orange">*</span>
                </label>
                <select
                  id="productCategory"
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-charcoal border border-graphite-border text-sm text-warm-white focus:outline-none focus:border-industrial-orange transition-all"
                >
                  <option value="rubber-bush">Rubber Bush & Industrial Parts</option>
                  <option value="extruded-profiles">Rubber Extruded Profiles</option>
                  <option value="custom-molded">Custom Molded Components</option>
                  <option value="seal-o-ring-kits">Seal & O-Ring Kits</option>
                  <option value="oil-packing-seals">Oil & Packing Seals</option>
                  <option value="rubber-gaskets">Industrial Rubber Gaskets</option>
                  <option value="bespoke-development">New Die / Mould Development</option>
                </select>
              </div>

              <div>
                <label htmlFor="estimatedQuantity" className="block text-xs font-mono uppercase tracking-wider text-warm-white mb-2">
                  Estimated Quantity <span className="text-industrial-orange">*</span>
                </label>
                <input
                  id="estimatedQuantity"
                  name="estimatedQuantity"
                  type="text"
                  value={formData.estimatedQuantity}
                  onChange={handleChange}
                  placeholder="e.g. 5,000 pcs / month or 500 pcs trial"
                  className={`w-full px-4 py-3 rounded-xl bg-charcoal border text-sm text-warm-white placeholder:text-muted-gray/50 focus:outline-none transition-all ${
                    errors.estimatedQuantity ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-graphite-border focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange"
                  }`}
                />
                {errors.estimatedQuantity && <p className="mt-1 text-xs text-red-400">{errors.estimatedQuantity}</p>}
              </div>
            </div>

            {/* Specific component prefill indicator */}
            {formData.specificProduct && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-industrial-orange/10 border border-industrial-orange/30 text-xs">
                <span className="text-warm-white">
                  Quoting specifically for: <strong className="text-industrial-orange">{formData.specificProduct}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, specificProduct: "" }))}
                  className="text-muted-gray hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Field Row 4: Project Description & Specs */}
            <div>
              <label htmlFor="projectDescription" className="block text-xs font-mono uppercase tracking-wider text-warm-white mb-2">
                Technical Specifications & Working Conditions <span className="text-industrial-orange">*</span>
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={4}
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Mention polymer choice (NBR, EPDM, Silicone, etc.), hardness Shore A, working temperatures, chemical or oil exposure, and dimensional tolerances..."
                className={`w-full px-4 py-3 rounded-xl bg-charcoal border text-sm text-warm-white placeholder:text-muted-gray/50 focus:outline-none transition-all resize-y ${
                  errors.projectDescription ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-graphite-border focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange"
                }`}
              />
              {errors.projectDescription && <p className="mt-1 text-xs text-red-400">{errors.projectDescription}</p>}
            </div>

            {/* Optional Drawing / CAD File Upload Simulation */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-warm-white mb-2">
                Attach 2D/3D CAD Drawing / Technical Sheet <span className="text-muted-gray font-normal lowercase">(Optional, Max 15MB)</span>
              </label>
              <div className="relative border-2 border-dashed border-graphite-border hover:border-industrial-orange/50 rounded-xl p-4 bg-charcoal/50 text-center transition-colors">
                <input
                  type="file"
                  id="drawingFile"
                  onChange={handleFileChange}
                  accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.jpg,.jpeg,.png"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                {selectedFile ? (
                  <div className="flex items-center justify-between px-3 py-1.5 bg-graphite rounded-lg border border-graphite-border text-xs">
                    <div className="flex items-center gap-2 truncate">
                      <FileText className="w-4 h-4 text-industrial-orange shrink-0" />
                      <span className="text-warm-white font-mono truncate">{selectedFile.name}</span>
                      <span className="text-muted-gray">({(selectedFile.size / 1024).toFixed(0)} KB)</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFile(null);
                      }}
                      className="text-muted-gray hover:text-white ml-2"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-2 text-muted-gray">
                    <Upload className="w-6 h-6 text-industrial-orange/80 mb-2" />
                    <span className="text-xs text-warm-white font-medium">Click or drag & drop CAD / PDF drawing</span>
                    <span className="text-[11px] text-muted-gray mt-0.5">Supports PDF, STEP, DWG, DXF, PNG (Up to 15MB)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 rounded-xl bg-industrial-orange hover:bg-industrial-orange-hover text-white font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-industrial-orange/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing RFQ...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Request for Quotation</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-muted-gray text-center mt-3">
                Strict industrial confidentiality: your engineering drawings and specs will never be shared with third parties.
              </p>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
