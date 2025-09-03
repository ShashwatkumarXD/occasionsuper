import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export default function BankDetailsWithSummary() {
  const [formData, setFormData] = useState({
    accountHolder: "",
    accountNumber: "",
    ifsc: "",
    bankName: "",
    branch: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Bank Details & Application Summary
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="accountHolder">Account Holder Name</Label>
                <Input
                  id="accountHolder"
                  name="accountHolder"
                  placeholder="Enter account holder name"
                  value={formData.accountHolder}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="Enter account number"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="ifsc">IFSC Code</Label>
                <Input
                  id="ifsc"
                  name="ifsc"
                  placeholder="Enter IFSC code"
                  value={formData.ifsc}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="bankName">Bank Name</Label>
                <Input
                  id="bankName"
                  name="bankName"
                  placeholder="Enter bank name"
                  value={formData.bankName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="branch">Branch</Label>
                <Input
                  id="branch"
                  name="branch"
                  placeholder="Enter branch name"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-span-2 flex justify-center">
                <Button type="submit" className="px-6 py-2 rounded-lg">
                  Submit
                </Button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <CheckCircle2 className="text-green-500" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-center">Application Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
                <p><strong>Account Holder:</strong> {formData.accountHolder}</p>
                <p><strong>Account Number:</strong> {formData.accountNumber}</p>
                <p><strong>IFSC:</strong> {formData.ifsc}</p>
                <p><strong>Bank Name:</strong> {formData.bankName}</p>
                <p><strong>Branch:</strong> {formData.branch}</p>
              </div>
              <div className="flex justify-center">
                <Button onClick={() => setSubmitted(false)}>Edit Details</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
