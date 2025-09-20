"use client"

import { useEffect } from "react"

interface MobileMenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenuOverlay({ isOpen, onClose }: MobileMenuOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={onClose} />
}
