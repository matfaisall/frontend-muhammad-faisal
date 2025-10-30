/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import SelectInputCountry from "@/components/shared/select-input/SelectInputCountry";
import SelectInputPort from "@/components/shared/select-input/SelectInputPort";
import SelectInputProduct from "@/components/shared/select-input/SelectInputProduct";
import { fetchCountries, fetchPorts, fetchProducts } from "@/lib/api";
import { Textarea } from "@/components/ui/textarea";
import InputGroupWithIcon from "@/components/shared/text-input/InputGroupWithIcon";

export default function Home() {
  const [countries, setCountries] = React.useState<any[]>([]);
  const [ports, setPorts] = React.useState<any[]>([]);
  const [products, setProducts] = React.useState<any[]>([]);

  const [formData, setFormData] = React.useState<any>({
    negara: "",
    pelabuhan: "",
    barang: "",
    description: "",
    discount: "",
    harga: "",
    total: "",
  });

  // console.log("formdata", formData);

  React.useEffect(() => {
    fetchCountries().then((res) => {
      setCountries(res);
    });
  }, []);

  React.useEffect(() => {
    if (formData.negara) {
      fetchPorts(formData.negara).then((res) => {
        setPorts(res);
      });

      setProducts([]);
      setFormData((prev: any) => ({
        ...prev,
        pelabuhan: "",
        barang: "",
        description: "",
        discount: "",
        harga: "",
        total: "",
      }));
    }
  }, [formData.negara]);

  React.useEffect(() => {
    if (formData.pelabuhan) {
      fetchProducts(formData.pelabuhan).then((res) => {
        console.log("res", res);
        setProducts(res);
      });
      setFormData((prev: any) => ({
        ...prev,
        barang: "",
        description: "",
        discount: "",
        harga: "",
        total: "",
      }));
    }
  }, [formData.pelabuhan]);

  React.useEffect(() => {
    if (formData.barang) {
      const selected = products.find(
        (p) => p.id_barang === Number(formData.barang)
      );
      if (selected) {
        const total = selected.harga - selected.harga * (selected.diskon / 100);
        setFormData((prev: any) => ({
          ...prev,
          description: selected.description || "",
          harga: selected.harga || "",
          discount: selected.diskon || "",
          total: total || "",
        }));
      }
    }
  }, [formData.barang, products]);

  // console.log("ports", ports);
  console.log("formdata", formData);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Card className="max-w-md w-full">
        <CardHeader>
          <h2 className="font-bold text-green-500 text-center text-xl">
            Search Your Product
          </h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <SelectInputCountry
              label="Negara"
              placeholder="Select Country"
              value={formData.negara}
              options={countries}
              onChange={(val) => setFormData({ ...formData, negara: val })}
            />
            <SelectInputPort
              label="Pelabuhan"
              placeholder="Select Port"
              value={formData?.pelabuhan}
              options={ports}
              onChange={(val) => setFormData({ ...formData, pelabuhan: val })}
              disabled={!formData.negara}
            />
            <SelectInputProduct
              label="Product"
              placeholder="Select Product"
              value={formData?.barang}
              options={products}
              onChange={(val) => setFormData({ ...formData, barang: val })}
              disabled={!formData.pelabuhan}
            />
            <div className="col-span-2">
              <div className="space-y-2">
                <Label className="text-sm  text-gray-500 font-light">
                  Description
                </Label>
                <Textarea value={formData?.description} readOnly disabled />
              </div>
            </div>

            <InputGroupWithIcon
              label="Discount"
              value={formData?.discount}
              placeholder="Input discount"
              align="inline-end"
            />

            <InputGroupWithIcon
              label="Harga"
              value={formData?.harga}
              placeholder="Input harga"
            />

            <InputGroupWithIcon
              label="Total"
              value={formData?.total}
              placeholder="Input nominal"
              align="inline-start"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
