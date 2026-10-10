#!/usr/bin/env python3
"""Publishes screenshots that show third-party data: reads .captures-draft/, blurs the
personal-data regions (fixed 1440x900 viewport) and writes the result to docs/img.
Run `npm run capture` first, then this. Screens without REGIONS are NOT published."""
from pathlib import Path
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "docs" / "img"
DRAFT = ROOT / ".captures-draft"
# (x0, y0, x1, y1) in px; rows start below the grid header.
REGIONS = {
    "webapp-configuracion-persona.png": [(280, 285, 400, 705),    # Identificación
                                         (410, 285, 600, 705),    # Nombre
                                         (830, 285, 995, 705),    # Dirección
                                         (1005, 285, 1115, 705),  # Teléfono
                                         (1125, 285, 1275, 705)], # Correo
    "webapp-usuarios.png": [(280, 235, 570, 655),    # Nombre
                            (580, 235, 875, 655),    # Apellido
                            (885, 235, 1235, 655)],  # Correo
    # Whole list blurred; the "Subcuenta" badge is pasted back unblurred (see KEEP).
    "webapp-terceros.png": [(220, 325, 511, 880)],
}
# Regions pasted back sharp after blurring (e.g. a status badge inside a blurred list).
KEEP = {
    "webapp-terceros.png": [(427, 401, 501, 422)],
}
for name, boxes in REGIONS.items():
    p = DRAFT / name
    if not p.exists():
        print("missing in draft", name); continue
    im = Image.open(p).convert("RGB")
    sharp = {k: im.crop(k) for k in KEEP.get(name, [])}
    for b in boxes:
        im.paste(im.crop(b).filter(ImageFilter.GaussianBlur(7)), b[:2])
    for k, crop in sharp.items():
        im.paste(crop, k[:2])
    im.save(IMG / name, optimize=True)
    print("published", name)
