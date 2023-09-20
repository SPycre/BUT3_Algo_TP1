"use client";

import { TextInput, Checkbox, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FormEventHandler, useMemo } from 'react';
import { ProductsCategoryData } from "tp-kit/types";
import { ProductFilterResult } from '@/types';

type Props = {categories: ProductsCategoryData[], onChange : (param : ProductFilterResult) => void}

export function ProductFilters({categories, onChange} : Props) {

    const form = useForm({
        initialValues: {
            categoriesSlug: [],
            search: ""
        }
    })

    function handleFilter(values : ProductFilterResult) {
        onChange(values)
    }

    return (
        <main>
            <form onSubmit={form.onSubmit((values) => handleFilter(values))}>
                <TextInput id="search" {...form.getInputProps("search")}></TextInput>
                <Checkbox.Group {...form.getInputProps("categoriesSlug")}>
                    <Group>
                    {categories.map((category,index) => <Checkbox key={index} value={category.slug} label={category.name}></Checkbox>)}
                    </Group>
                </Checkbox.Group>
                <Button variant="ghost" type="submit">Filter</Button>
            </form>
        </main>
    )
}