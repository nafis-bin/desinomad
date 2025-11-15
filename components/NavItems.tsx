"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useState, useRef } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"

export default function NavItems() {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)

    const navRef = useRef<HTMLDivElement | null>(null)
    useOnClickOutside(navRef, () => setActiveIndex(null))

    const isAnyOpen = activeIndex !== null

    return (
        <div className="flex gap-4 h-full" ref={navRef}>
            {PRODUCT_CATEGORIES.map((category, i) => {
                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null)
                    } else {
                        setActiveIndex(i)
                    }
                }

                const isOpen = i === activeIndex
                return (
                    <NavItem 
                        category={category} 
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        key={category.value}
                        isAnyOpen={isAnyOpen}
                    />
                    // 1.06.33 timestamp
                )
            })}
        </div>
    )
}