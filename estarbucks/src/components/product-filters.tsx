"use client";

import { TextInput, Checkbox, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FormEventHandler } from 'react';
import { ProductsCategoryData } from "tp-kit/types";
import { ProductFilterResult } from '@/types';

type Props = {categories: ProductsCategoryData[], onChange ?: (param : ProductFilterResult) => void}

export default function ProductFilters({categories, onChange} : Props) {

    const form = useForm({
        initialValues: {
            categoriesSlug: [],
            search: ""
        }
    })

    return (
        <main>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput {...form.getInputProps("search")}></TextInput>
                <Checkbox.Group {...form.getInputProps("categoriesSlug")}>
                    {categories.map((category) => <Checkbox label={category.name}></Checkbox>)}
                </Checkbox.Group>
                <Button type="submit">Filter</Button>
            </form>
        </main>
    )
}